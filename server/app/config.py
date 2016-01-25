import os.path
DEBUG = True
WTF_CSRF_ENABLED = False
DEFAULT_FILE_STORAGE = 'filesystem'
# UPLOADS_FOLDER = os.path.realpath('.') + '../../kankan/nginx/html/static/'
UPLOADS_FOLDER ='static/'
FILE_SYSTEM_STORAGE_FILE_VIEW = 'static'
ALLOWED_EXTENSIONS = set(['txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'])