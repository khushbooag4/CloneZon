Project:  Access control
Access control works on creating a centralized authentication server on top of the applications to provide single sign-on. It proxy all your requests through a service layer that authenticates the requests and asks you to log in if you are not authorized. Currently, for authentication, we using oauth2 server and to decouple authorization, we using FusionAuth. In this project, we have accomplished the below tasks

1. We have written a script to enable FusionAuth as an OAuth2 proxy for two demo server
   1. Httpbin
   2. Metabase
2. We have used Nginx to route unauthorized requests.
3. You can see the working of the oauth2 proxy with Keycloack on the Shishka platform.Reference link:- 

End goal: We are trying to provide an easy way for developers to use FusionAuth for authentication and access control for their projects. With the help of contributions, we should be able to use this project on top of other projects through FusionAuth. We should be able to use Single Sign On (SSO) to log in once, then get access to any standards-based application. We should also work on creating detailed documentation for the installation and usage of the Access Control project. This will help developers quickly set up and use the project.4

Expected-Skills