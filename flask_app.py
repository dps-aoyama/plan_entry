from flask import Flask


app = Flask(__name__)


@app.route('/')
def index():
    return 'Index Page!'


@app.route('/health')
def health():
	print '変更検出テスト'
	print '変更検出テスト2'
    return 'Health Check OK!!'
