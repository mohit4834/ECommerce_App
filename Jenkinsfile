pipeline {

agent any

environment {
    scannerHome = tool name: 'Test_Sonar'
    KUBECONFIG = 'C:/Users/mohitgoyal/.kube/config'
    CHROME_BIN='C:/Program Files (x86)/Google/Chrome/Application/chrome.exe'
}

tools {
    nodejs 'nodejs'
    dockerTool 'dockerMohit'
}

    stages {
        stage('Build') {
            steps {
				powershell 'npm install --legacy-peer-deps'
                powershell 'npm install -g @angular/cli --legacy-peer-deps'
            }
        }
        // stage('Test Case Execution') {
        //     steps {
        //         powershell 'npm run test'
        //     }
        // }
        stage('Sonarqube Analysis') {
            steps {
                withSonarQubeEnv('SonarQubeScanner') {
                  powershell 'npm run sonar'
                }
            }
        }
        stage('Build & Push Docker Image') {
            steps {
                script {
                    dockerImage = docker.build("goyalmohit48/ecommerce-nagp-frontend-7")
                    docker.withRegistry('', 'dockerHubCredentials') {
                        dockerImage.push()
                }
            }
        }
        }
        stage('Kubernetes Deployment') {
            steps{
                echo "environment variable path ${KUBECONFIG}"
                echo "workspace path is ${env.WORKSPACE}"
                powershell gcloud auth login
                powershell "kubectl apply -f deployment-definition.yaml"
            }
        }
    }
}
