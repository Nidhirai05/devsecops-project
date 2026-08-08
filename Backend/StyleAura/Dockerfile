# ==========================================
# Stage 1: Build using JDK 21
# ==========================================
# Use Debian-based images (slim/jammy) which are regularly patched and have fewer reported
# vulnerabilities compared to older Alpine variants for these Java images.
FROM maven:3.9-eclipse-temurin-21-jdk-jammy AS build
WORKDIR /app

# Copy the pom.xml first to cache dependencies efficiently
COPY pom.xml .
RUN mvn dependency:go-offline -B

# Copy the source code and build the package
COPY src ./src
RUN mvn package -DskipTests

# ==========================================
# Stage 2: Runtime image using JRE 21 (Secure & Lightweight)
# ==========================================
FROM eclipse-temurin:21-jre-jammy
WORKDIR /app

# Copy the built JAR from stage 1
COPY --from=build /app/target/*.jar app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]