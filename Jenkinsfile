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
        stage('Kubernetes Deployment') {
            steps{
                echo "environment variable path ${KUBECONFIG}"
                echo "workspace path is ${env.WORKSPACE}"
                powershell "kubectl --kubeconfig=${KUBECONFIG} get rs -n kubernetes-cluster-mohitgoyal -o wide"
            }
        }

        stage('gcloud login') {
          steps {
            powershell "gcloud auth login"
          }
        }
    }
}
