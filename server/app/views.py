import os
from flask import g, jsonify, url_for, request, Flask, request, redirect
from werkzeug import secure_filename
from flask.ext import restful
from server import api, db, flask_bcrypt, auth, file_type, file_path
from models import User, Post
from forms import UserCreateForm, SessionCreateForm, PostCreateForm
from serializers import UserSerializer, PostSerializer
from flask import render_template

@auth.verify_password
def verify_password(email, password):
    user = User.query.filter_by(email=email).first()
    if not user:
        return False
    g.user = user
    return flask_bcrypt.check_password_hash(user.password, password)

class UserView(restful.Resource):
    def post(self):
        form = UserCreateForm()
        if not form.validate_on_submit():
            return form.errors, 422

        user = User(form.email.data, form.password.data)
        db.session.add(user)
        db.session.commit()
        return UserSerializer(user).data

class SessionView(restful.Resource):
    def post(self):
        form = SessionCreateForm()
        if not form.validate_on_submit():
            return form.errors, 422

        user = User.query.filter_by(email=form.email.data).first()
        if user and flask_bcrypt.check_password_hash(user.password, form.password.data):
            return UserSerializer(user).data, 201
        return '', 401

class PostListView(restful.Resource):
    def get(self):
        posts = Post.query.all()
        return PostSerializer(posts, many=True).data

    @auth.login_required
    def post(self):
        form = PostCreateForm()
        if not form.validate_on_submit():
            return form.errors, 422
        post = Post(form.title.data,form.img.data, form.body.data,form.tag.data)
        db.session.add(post)
        db.session.commit()
        return PostSerializer(post).data, 201

class PostView(restful.Resource):
    def get(self, id):
        posts = Post.query.filter_by(id=id).first()
        return PostSerializer(posts).data

class FileUpload(restful.Resource):
    def post(self):
        file = request.files['file']
        if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            import time
            prename = time.strftime(r"%Y-%m-%d_%H-%M-%S",time.localtime())
            filename=prename+filename
            file.save(os.path.join(file_path, filename))
            return jsonify(filename=filename)

    def get(self):
        uploads = Upload.query.all()
        return jsonify()

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1] in file_type


        


api.add_resource(UserView, '/api/v1/users')
api.add_resource(SessionView, '/api/v1/sessions')
api.add_resource(PostListView, '/api/v1/posts')
api.add_resource(PostView, '/api/v1/posts/<int:id>')
api.add_resource(FileUpload, '/api/v1/upload')


