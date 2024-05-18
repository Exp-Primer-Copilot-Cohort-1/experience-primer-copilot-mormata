//Create web server
const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');
const { getComments, addComment } = require('./comments');
const { getCommentsById, addCommentById } = require
