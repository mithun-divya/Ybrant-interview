Task 2 :  Create separate step to your pipeline for scanning images - use Trivy to scan the container
image for vulnerability. If the images have HIGH or Critical Vulnerablities, the CI code should
have a logic to abort the build.




I installed Docker and trivy scan in the Jenkins server
Created a Docker file to build the image.
Create jenkinsfile-task2 to build the docker image using Docker file in repository
docker build -t dockerdevops1994/nodejs-app:latest .
Used trivy to scan docker image and  If the images have HIGH or Critical Vulnerablities, it abort the build
trivy image --exit-code 1 --severity HIGH,CRITICAL dockerdevops1994/nodejs-app:latest
![image](https://github.com/mithun-divya/Ybrant-interview/assets/125994104/4d997703-cdc9-49ea-a383-ea40bb43fea3)

![image](https://github.com/mithun-divya/Ybrant-interview/assets/125994104/e1f15f0e-ac20-45ea-be70-0d4ed29cf373)


 

 

