**My APP assumes familiarity with VS Code.**
1. Look at menu bar to see menu **Terminal**
2. Click in **Terminal**
3. Then click in **New Terminal**
You can see terminal at the buttom of the page
# Method1
**creating the project folder**
<code>mkdir myApp</code>

**Changing Directory to project folder**
<code>cd myApp</code>

**create new MVc**
<code>dotnet new mvc</code>

**Running App**
<code>dotnet run</code>
# Method2
**create new MVc with project name**
<code>dotnet new mvc -o myApp</code>
**Running App**
<code>code -r myApp</code>
**Trust HTTP Certificates**
<code>dotnet dev-certs https --trust</code>

**we find something like this in terminal**
<code> Now listening on: http://localhost:5153</code>

paste the url in browser
**Boom** New app sucessfully created!!!!!!!!!

