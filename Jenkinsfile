pipeline {
  agent any
  stages {
    stage('pull repository') {
      when {
		    branch 'master'
      }
      steps {
        sh '/home/pi/hdd/projects/StormLanguage/pull.sh'
      }
    }
    stage('build') {
      when {
		    branch 'master'
      }
      parallel {
        stage('stop servers') {
          steps {
            sh '/home/pi/hdd/projects/StormLanguage/kill-servers.sh'
          }
        }
        stage('build client api') {
          steps {
            sh '/home/pi/hdd/projects/StormLanguage/build-client.sh'
          }
        }
      }
    }
    stage('run servers') {
      when {
		    branch 'master'
      }
      parallel {
        stage('run python') {
          environment {
            JENKINS_NODE_COOKIE = 'dontkillme'
            FLASK_APP = 'server.py'
          }
          steps {
            sh '/home/pi/hdd/projects/StormLanguage/restart-python.sh'
          }
        }
        stage('web deploy') {
          steps {
            sh '/home/pi/hdd/projects/StormLanguage/export-web.sh'
          }
        }
        stage('copy storm files') {
          steps {
            sh '/home/pi/hdd/projects/StormLanguage/copy-storm.sh'
          }
        }
        stage('run client') {
          environment {
            JENKINS_NODE_COOKIE = 'dontkillme'
          }
          steps {
            sh '/home/pi/hdd/projects/StormLanguage/restart-client.sh'
          }
        }
      }
    }
  }
}
