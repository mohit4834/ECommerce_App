pipeline {

agent any

environment {
    scannerHome = tool name: 'Test_Sonar'
    // KUBECONFIG = '/home/goyalmohit_test1/.kube/config'
    KUBECONFIG = 'C:/Users/mohitgoyal/.kube/config'
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
        stage('Build & Pupowershell Docker Image') {
            steps {
                script {
                    dockerImage = docker.build("goyalmohit48/ecommerce-nagp-frontend-8")
                    docker.withRegistry('', 'dockerHubCredentials') {
                        dockerImage.pupowershell()
                }
            }
        }
        }
        stage('Kubernetes Deployment') {
            steps{
                echo "workspace path is ${env.WORKSPACE}"
                // powershell "gcloud auth login"
                powershell "kubectl --kubeconfig=${KUBECONFIG} apply -f deployment-definition.yaml"
            }
        }
    }
}
