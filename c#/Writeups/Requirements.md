** What is dotnet 

.NET is a free, open-source development platform created by Microsoft for building a wide range of applications. 
It provides a framework for developing applications across web, desktop, mobile, cloud, gaming, and IoT (Internet of Things) environments.
Developers can use multiple programming languages with .NET, such as C#, VB.NET, and F#. Here we will focus in c# Programming languages

**web UI with MVC
The Model-View-Controller (MVC) architectural pattern separates an application into three main groups of components: Models, Views, and Controllers. 
This pattern helps to achieve separation of concerns. Using this pattern, user requests are routed to a Controller which is responsible for working with
the Model to perform user actions and/or retrieve results of queries. The Controller chooses the View to display to the user, and provides it with any Model 
data it requires.

** MVC Architecture in ASP.NET Core/ASP.NET
Model:
The Model is the part of the application that handles the data and business logic. It represents the application's data structure and is responsible for
managing the data and communicating with the database or other data sources.
 Example: You might have a User model that contains properties like Name, Email, Age, etc., and might interact with the database to get or set data for a user.

 View:
 The View is the UI part of the application. It is responsible for rendering the data from the model into a web page that the user interacts with. 
 In ASP.NET MVC, views are typically written using Razor syntax (e.g., .cshtml files), where you can combine HTML with C# code.
 Example: A UserView could be a web page that displays a list of users fetched from the database and displayed in a table, or it might be a form for the user to 
 input their details.

 Controller:
 The Controller is the intermediary between the Model and the View. It receives input from the user (through URLs, forms, etc.), processes that input 
 (often by interacting with the model), and returns the appropriate View. Controllers handle the logic of your application, decide which model to use, and which 
 view to render based on user actions or routes.

Example: A UserController would have methods (called actions) like CreateUser(), EditUser(), GetUserList(), etc. The controller would decide whether to display 
a form, save data, or show a list of users based on the action and input.

** Breakdown of Responsibilities:
1. Model (M):
a. Manages the data and business rules.
b. Communicates with the database.
c. Contains classes that represent the domain (e.g., User, Product).

2. View (V):
a. Responsible for rendering the UI (HTML, CSS, JavaScript).
b. Displays data that comes from the controller via the model.
c. Usually written using Razor syntax (.cshtml files).

3. Controller (C):
a. Handles user input and decides which view to return and which model to use.
b. Accepts input via HTTP requests, processes the input, and returns a response (typically a View).
c. Coordinates between the View and Model.
d. Methods inside the controller are called Action Methods.


** Required Tools and extensions
1. NuGet Package Manager
2. c#
3. c# dev kit
4. .net install tools
5. .net ext pack
6. Material icon theme
7. Vscode

** commands to create project 
1. Open terminal in vscode
2. cd [Folder_Name]
3. dotnet new mvc
4. dotnet run

