pipeline {

agent any

environment {
    scannerHome = tool name: 'Test_Sonar'
    CLOUDSDK_CONFIG = "C:/Users/mohitgoyal/.kube"
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
        stage('Kubernetes Deployment') {
            steps{
                powershell "kubectl get pods -n kubernetes-cluster-mohitgoyal -o wide"
            }
        }
    }
}
