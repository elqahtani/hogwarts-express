# hogwart-express

Simple Node JS Application for demo purpose, use CI / CD Jenkins deployment into Kubernetes. 

##

Use Minikube in local development. And don't forget activate Ingress in minikube

`minikube addons enable ingress`

If you want run manually without Jenkins, just apply kube-hogwarts.yml

`kubectl apply -f kube-hogwarts.yml`

`minikube service hogwarts-express-service`

`kubectl get ingress`

and add this line into your /etc/hosts

`192.168.64.2 hogwarts-train.info #you can add your own ip address from kubectl get ingress output. `

Open hogwarts-train.info with your favourite web browser. 

Reference : 
https://kubernetes.io/docs/tasks/access-application-cluster/ingress-minikube/



