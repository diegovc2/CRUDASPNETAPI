FROM mcr.microsoft.com/dotnet/core/sdk:3.1-bionic AS build
WORKDIR /app

# copy csproj and restore as distinct layers
COPY *.sln .
COPY WebApplication1/*.csproj ./WebApplication1/
RUN dotnet restore

# copy everything else and build app
COPY WebApplication1/. ./WebApplication1/
WORKDIR /app/WebApplication1
RUN dotnet publish -c Release -o out

FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-bionic AS runtime
WORKDIR /app
COPY --from=build /app/WebApplication1/out .
EXPOSE 80
CMD ["dotnet", "WebApplication1.dll"]
