Task 1:
Create CI/CD pipeline for the application in the link -
https://github.com/sahat/hackathon-starter.git
Readme contains the details of building the app. Feel free to use a github actions or Jenkins
multi-branch pipeline or azure devops pipeline for your CI. Please showcase your depth of
knowledge on CI with pipelines that are well written.

As a first step, install and configure Jenkins
I intsalled jenkins on amazon EC2 with centos distribution.
Run & configure Jenkins (Wizard), install required plugins
Generate and setup git ssh credentials, so your machine able to access the repo:

 ![image](https://github.com/mithun-divya/Ybrant-interview/assets/125994104/47835441-1f8f-4e1c-9c7b-b6565b9691ac)


Setup webhook on github to call your jenkins endpoint, like this

![image](https://github.com/mithun-divya/Ybrant-interview/assets/125994104/3212c913-3e56-4de7-98e3-fe54d9455999)

Create a new pipeline job.
Check “hook trigger for Scm”, add repository url (with ssh credentials or token) and specify “master” branch to trigger.
Create Jenkinsfile-task1 pipeline with a build stage:  
 ![image](https://github.com/mithun-divya/Ybrant-interview/assets/125994104/e9518bb3-5f94-44a2-95c9-23d20425eebf)

To start this application first you can get this repo code using below url

git https://github.com/mithun-divya/Ybrant-interview.git
cd nodejs-app-mss
To build nodejs application – “npm install”

