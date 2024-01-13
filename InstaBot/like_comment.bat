@echo off

REM Set your Instagram Graph API endpoint
set endpoint="https://graph.instagram.com/v12.0/%1/likes"

REM Set your access token
set access_token=%2

REM Make the POST request to like the comment
curl -X POST ^
  "%endpoint%" ^
  -H "Authorization: Bearer %access_token%"


REM To run this bat file - like_comment.bat {comment-id} {your-access-token} (will be run by the js file)
