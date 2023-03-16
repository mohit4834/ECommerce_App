pipeline {

agent any

environment {
    scannerHome = tool name: 'Test_Sonar'
    CHROME_BIN='C:/Program Files (x86)/Google/Chrome/Application/chrome.exe'
    HOME = '.'
}

tools {
    nodejs 'nodejs'
    dockerTool 'dockerMohit'
}

    stages {
        stage('Build') {
            steps {
				sh 'npm install --legacy-peer-deps'
                sh 'npm install -g @angular/cli --legacy-peer-deps'
            }
        }
        // stage('Test Case Execution') {
        //     steps {
        //         sh 'npm run test'
        //     }
        // }
        // stage('Sonarqube Analysis') {
        //     steps {
        //         withSonarQubeEnv('SonarQubeScanner') {
        //           sh 'npm run sonar'
        //         }
        //     }
        // }
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
                echo "workspace path is ${env.WORKSPACE}"
                // sh "gcloud auth login"
                sh "kubectl apply -f deployment-definition.yaml"
            }
        }
    }
}
