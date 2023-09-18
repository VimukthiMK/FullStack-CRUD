# Use an official OpenJDK runtime as a parent image
FROM openjdk:17-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the Spring Boot JAR file into the container
COPY out/artifacts/Backend_Application_jar/Backend-Application.jar app.jar

# Expose the port your Spring Boot app will run on
EXPOSE 8080

# Command to run your Spring Boot application
CMD ["java", "-jar"java -jar app.jar, "app.jar"]