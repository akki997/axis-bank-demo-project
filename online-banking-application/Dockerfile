FROM openjdk:11.0-slim
ADD target/banking-demo.jar app.jar
EXPOSE 9010
ENTRYPOINT [ "java", "-jar", "app.jar" ]