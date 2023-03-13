@Library('docker')

pipeline {

agent any

environment {
    scannerHome = tool name: 'Test_Sonar'
    KUBECONFIG = 'C:/Users/mohitgoyal/.kube/config'
}

tools {
    nodejs 'nodejs'
}

    stages {
        stage('Build') {
            steps {
				powershell 'npm install'
                powershell 'npm install -g @angular/cli'
            }
        }
        // stage('Test Case Execution') {
        //     when {
        //         branch 'master'
        //     }
        //     steps {
        //         powershell 'npm run test'
        //     }
        // }
        stage('Build Docker Image') {
            steps {
                script {
                    docker.build("goyalmohit48/ecommerce-nagp-frontend-4")
                }
            }
        }
        stage('Push Docker Image') {
            steps {
                script {
                    docker.withRegistry('https://registry.hub.docker.com', 'dockerHubCredentials') {
                        dockerImage.push()
                    }
                }
            }
        }
        stage('Kubernetes Deployment') {
            steps{
                echo "environment variable path ${KUBECONFIG}"
                echo "workspace path is ${env.WORKSPACE}"
                powershell "kubectl --kubeconfig=${KUBECONFIG} apply -f deployment-definition.yaml"
            }
        }
    }
}
