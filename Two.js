"responses": [
 {
 "is": {
 "statusCode": 200,
 "body": {
 "Text":"Response TWO ","token":"emailAddress","expires_in":90
 }
 }
 }
 ],
 "predicates": [
 {
 "exists": {
 "body" :
 {
 "email": true,"password" : true
 },
 "method" : "POST",
 "path" : "/Apitesting/v1/test?type=ResponseTwo"
 }
 }
 ]