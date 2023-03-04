pipeline {
    
agent any

environment {
    scannerHome = tool name: 'Test_Sonar'
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
        stage('Sonarqube Analysis') {
            when {
                branch 'develop'
            }
            steps {
                withSonarQubeEnv('SonarQubeScanner') {
                  bat "${scannerHome}/bin/sonar-scanner"
                }
            }
        }
        stage('Kubernetes Deployment') {
            steps{
                powershell "kubectl apply -f deployment-definition.yaml"
            }
        }
    }
}