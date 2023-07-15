Task 4:
As a part of CI Step, authenticate and deploy this container image in kubernetes backed by
required kubernetes service.

Intially Setup kuberentes master and worker nodes Using Kubeadm In AWS EC2 Ubuntu Servers Container-D As Runtime.
Now to authenticate jenkins server with kubernetes intall kubectl in jenkins server and switch to jenkins user 
Sudo –i –u jenkins
Cd ~ mkdir .kube
Vi .kube/config 
Now  copy  .kube/config file from master node to jenkins home directory
Created Jenkins-task4 pipeline script for task4 
As ci step  pushed the image to my docker private repository using docker login and push commands.

 ![image](https://github.com/mithun-divya/Ybrant-interview/assets/125994104/f1ca6170-a312-441a-86b7-c918bdcfe1a7)


Created nodejsapplication.yml kubernetes manifest file to deploy this container image in kubernetes.

![image](https://github.com/mithun-divya/Ybrant-interview/assets/125994104/53eed35f-074e-4ab8-b0f9-051d103a16ad)


![image](https://github.com/mithun-divya/Ybrant-interview/assets/125994104/29c7973c-d63d-4228-ac7b-1afd884e53d8)



![image](https://github.com/mithun-divya/Ybrant-interview/assets/125994104/1b35c65f-a3d3-41a3-9b3d-31fd46fcbddd)



 


 

 
