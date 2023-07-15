Task 3:
Add a step in CI for code quality/code coverage – Use blackduck or sonarqube as a part of
pipeline job.

First Install sonarqube on EC2 instance and start sonar server with sonar user.
Generate sonar token in by logging to sonar server.
Integrate sonar server with jenkins by  installing sonarscanner plugin and configuring sonar server details and configure generated sonar token for authentication.


![image](https://github.com/mithun-divya/Ybrant-interview/assets/125994104/c92fd7f9-d080-4246-974f-1cddf788eb32)


Added a sonar-project.js file in the repository which contains details of sonarserver.
Added sonar-scanner dependency in package.json
Create Jenkinsfile-task3  pipeline with a build stage and stage for code quality using scanner.  
To Execute the SonarQube Repor, execute the below command.
npm run sonar
(OR)
node sonar-project.js


![image](https://github.com/mithun-divya/Ybrant-interview/assets/125994104/fc86fb1d-6c25-4971-a722-eb1e32fc1893)


![image](https://github.com/mithun-divya/Ybrant-interview/assets/125994104/5646d03c-8750-44b3-bd50-dca6a94f1c4b)


![image](https://github.com/mithun-divya/Ybrant-interview/assets/125994104/559b24b4-aea0-478e-90c4-34f533629da3)


![image](https://github.com/mithun-divya/Ybrant-interview/assets/125994104/5ae045bf-8c89-4844-930a-7c7f3b3b3ef9)





   


 


 


 
