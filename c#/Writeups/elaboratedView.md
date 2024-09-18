# Creating a view
In an ASP.NET MVC application, views are the files that define what the user sees on the screen, like web pages. These views are connected to controllers, which handle user input and decide what content to display.

**Views specific to a controller:** 
Each controller has its own folder inside the "Views" folder. For example, if you have a controller named "Home," the views for that controller will be stored in a folder called Views/Home.

**Shared views:**
If you have views that are used by multiple controllers (shared across different parts of your app), you put them in the Views/Shared folder.

To create a view for a specific controller action:<br>
1. Add a new file in the controller's folder inside the "Views" directory.
2. Name the file the same as the action in the controller, and give it a .cshtml extension.

For example, if you have an About action in the HomeController, you would create a file called About.cshtml inside the Views/Home folder. This file will be the view displayed when users visit the "About" page.

<code> 
@{
    ViewData["Title"] = "About";
}
&lt;h2&gt;@ViewData["Title"].&lt;/h2&gt;
&lt;h3&gt;@ViewData["Message"]&lt;/h3&gt;

&lt;p&gt;Use this area to provide additional information.&lt;/p&gt;


</code>

**Razor Markup:**

1. Razor is a syntax used in ASP.NET MVC views to combine C# code with HTML.
2. The @ symbol is used to switch from HTML to C# code. For example, if you want to insert C# code into your HTML, you use the @ symbol to start writing C# inside the HTML.

**Running C# Code:**
1. You can write C# code inside Razor by using curly braces { }. These are called Razor code blocks.
For example, in your view, you can assign a value to something like ViewData["Title"] = "About";. This would set the page title to "About".

**Displaying C# Values in HTML:**
1. If you want to display a C# value inside your HTML, just use the @ symbol followed by the variable name. For instance, you can show the title like this:
<code>&lt;h2&gt;@ViewData["Title"]&lt;/h2&gt;</code>
This will display the title on the page where the &lt;h2&gt; tag is.

**Page Layout:**
The HTML code you write in a view (like the  &lt;h2&gt; and &lt;h3&gt; tags) is just part of the complete page.
Other sections of the webpage, like the header, footer, or navigation, are managed by layout files or other shared view files that control the common structure of the whole page.

In summary, Razor allows you to mix C# code with HTML easily using the @ symbol, and the view you create is just one part of the complete webpage, with other parts managed by layout or shared views.

# How Controller Specifies Views
In ASP.NET MVC, when you write a controller action (a method in the controller), you often want to display a view (a web page) in response. To do this, the action method returns a ViewResult, which is a type of ActionResult that tells ASP.NET to render a view.

**ViewResult:** This is the result type that instructs the framework to render a view (i.e., an HTML page). It’s just one of many types of ActionResult. Other types include returning JSON data, files, or redirects.
Example of Returning a View:

**1. Creating a ViewResult:**
Technically, you could write code to create and return a ViewResult directly from the action, but that’s not usually done because there’s an easier way.

**2. Using the View Helper:**
Most controllers in ASP.NET inherit from a base class called Controller. This class gives you access to a method called View(), which automatically creates and returns a ViewResult for you.Instead of manually constructing a ViewResult, you can just call the View() method in your action method, which is much simpler.

**Example Code in HomeController.cs:**
public IActionResult About()
{
    ViewData["Message"] = "Your application description page."; // Setting a message to display in the view.
    return View(); // This returns the "About" view.
}

# ViewData and ViewBag in ASP.NET MVC
In ASP.NET MVC, ViewData and ViewBag are two similar ways to pass data from a controller to a view. Both are used to share small pieces of data, like strings, numbers, or objects, between the controller and view, but they have slight differences.

**ViewData**
ViewData is a dictionary of key-value pairs, where the key is a string. You can store data in ViewData inside a controller, and then retrieve that data in the view.

**Type:** ViewData is of type ViewDataDictionary.
**Syntax:** You access items using string keys, like ViewData["key"].
**Requires Casting:** You need to cast the value to the appropriate data type when you retrieve it.
Example of ViewData:
**Controller (HomeController.cs):**

<code>
public IActionResult About()
{
    ViewData["Message"] = "This is a ViewData example."; // Passing data from controller to view.
    ViewData["Year"] = 2024; // Storing an integer value.
    return View();
}
</code>

**View (About.cshtml):**

<code>

&lt;h2&gt;@ViewData["Message"]&lt;/h2&gt; <!-- Display the message passed from the controller. -->
&lt;p&gt;Year: @ViewData["Year"]&lt;/p&gt; <!-- Display the year passed from the controller. -->

</code>

In the example above, the message "This is a ViewData example." and the year 2024 are passed from the controller to the view using ViewData.

**ViewBag**
ViewBag is a dynamic object that provides a more flexible way to pass data between the controller and view. Unlike ViewData, ViewBag doesn't require you to use string keys—it allows you to define properties dynamically.

**Type:** ViewBag is a dynamic object (no need for typecasting).
**Syntax:** You set properties using dot notation, like ViewBag.PropertyName.
Example of ViewBag:

<code>
public IActionResult Contact()
{
    ViewBag.Message = "This is a ViewBag example."; // Passing data using ViewBag.
    ViewBag.CurrentYear = 2024; // Passing an integer value using ViewBag.
    return View();
}
</code>

**View (About.cshtml):**
<code>

&lt;h2&gt;@ViewBag["Message"]&lt;/h2&gt; <!-- Display the message using ViewBag. -->
&lt;p&gt;Year: @ViewBag["Year"]&lt;/p&gt; <!-- Display the year using viewBag. -->

</code>

**Summary of the differences between ViewData and ViewBag**
**ViewData**
1. Derives from ViewDataDictionary, so it has dictionary properties that can be useful, such as ContainsKey, Add, Remove, and Clear.
2. Keys in the dictionary are strings, so whitespace is allowed. Example: ViewData["Some Key With Whitespace"]
3. Any type other than a string must be cast in the view to use ViewData.
**ViewBag**
1. Derives from Microsoft.AspNetCore.Mvc.ViewFeatures.Internal.DynamicViewData, so it allows the creation of  dynamic properties using dot notation (@ViewBag.SomeKey = <value or object>), and no casting is required. The syntax of ViewBag makes it quicker to add to controllers and views.
2. Simpler to check for null values. Example: @ViewBag.Person?.Name

**When to Use ViewData or ViewBag:**
1. Use ViewData if you prefer a strongly-typed, dictionary-style syntax.
2. Use ViewBag if you want more flexibility and prefer to avoid explicit typecasting.
**Conclusion**
Both ViewData and ViewBag are useful for passing temporary data from a controller to a view in ASP.NET MVC. While ViewData is dictionary-based and requires casting, ViewBag is dynamic and easier to use in many cases. However, both are limited to the current request and are generally used for small pieces of data. For larger or more complex data, using a ViewModel is often a better approach.

# Dynamic views
Views that don't declare a model type using @model but that have a model instance passed to them (for example, return View(Address);) can reference the instance's properties dynamically:
<code>
&lt;address&gt;
    @Model.Street<br>
    @Model.City, @Model.State @Model.PostalCode<br>
    <abbr title="Phone">P:</abbr> 425.555.0100
&lt;/address&gt;
</code>

**conclusion**
This feature offers flexibility but doesn't offer compilation protection or IntelliSense. If the property doesn't exist, webpage generation fails at runtime.

# CSS Isolation in ASP.NET Core
CSS isolation is a feature in ASP.NET Core that allows you to create styles that are specific to a single component or page, preventing styles from affecting other parts of your application. This is particularly useful when building large applications to avoid style conflicts between different components or pages.

When you use CSS isolation, the styles defined for a particular component or page will only apply to that specific component, and not globally across your entire application.

**How CSS Isolation Works**
**Scoped Styles:**
When you define styles for a component or a page using CSS isolation, ASP.NET Core automatically scopes those styles to that component by attaching a unique identifier (or scope attribute) to the HTML elements and the corresponding CSS rules.

**Separate CSS File:**
For each component, you create a separate CSS file that contains the styles specific to that component. The name of this CSS file must match the component or page it belongs to, with the .css extension.

**Automatic Handling:**
ASP.NET Core handles the linking of isolated CSS files to their respective components. You don’t need to manually link or import the CSS files in the component files.

Example of CSS Isolation
Let’s walk through an example:
**Step 1: Create a Razor Component (or Page)**

<code>
&lt;h1 class="title"&gt;Welcome to MyComponent&lt;/h1&gt;
&lt;p&gt;This is a paragraph inside the MyComponent Razor component.&lt;/p&gt;
</code>

**Step 2: Create an Isolated CSS File**
Create a CSS file with the same name as the component, but with a .razor.css extension. This file contains the styles specific to MyComponent.

<code>
.title {
    color: blue;
    font-size: 24px;
}

p {
    color: green;
}
</code>

**Step 3: Automatic Scoping**\
When the application is run, ASP.NET Core will automatically add unique attributes to the HTML elements inside MyComponent.razor and scope the styles in MyComponent.razor.css to those elements.

<code>
&lt;h1 class="title mycomponent-css-isolated-scope"&gt;Welcome to MyComponent&lt;/h1&gt;
&lt;p class="mycomponent-css-isolated-scope"&gt;This is a paragraph inside the MyComponent Razor component.&lt;/p&gt;
</code>

And the CSS will be applied only to elements with the mycomponent-css-isolated-scope class, preventing any interference with styles on other components or pages.

**Benefits of CSS Isolation**

**1. Prevents Style Conflicts:** CSS rules scoped to one component won’t affect elements in other components, reducing the risk of unintentional styling conflicts.

**2. Encapsulation:** Each component can have its own isolated styles, making it easier to manage styles for individual components.

**3. Simplifies Large Applications:** In large applications with many components, CSS isolation helps keep the styles organized and prevents the need for deeply nested selectors.

**Drawbacks of CSS Isolation**

**1. Duplication of Styles:** In cases where many components share the same styles, CSS isolation might lead to style duplication unless a global stylesheet is used for common styles.

**2. Browser Support:** While most modern browsers support the technique used for CSS isolation, older browsers may have limitations, especially in handling scoped styles.

**Conclusion**
CSS isolation in ASP.NET Core allows you to build cleaner, more maintainable applications by scoping styles to individual components. This feature is especially useful in large applications, where avoiding style conflicts and managing CSS across many components can become challenging. It provides a flexible way to write component-specific styles without affecting the rest of your application.

# CSS preprocessor support
CSS preprocessors are useful for improving CSS development by utilizing features such as variables, nesting, modules, mixins, and inheritance. While CSS isolation doesn't natively support CSS preprocessors such as Sass or Less, integrating CSS preprocessors is seamless as long as preprocessor compilation occurs before the framework rewrites the CSS selectors during the build process. 

# CSS isolation configuration
CSS isolation permits configuration for some advanced scenarios, such as when there are dependencies on existing tools or workflows.

# Customize scope identifier format
By default, scope identifiers use the format b-{STRING}, where the {STRING} placeholder is a ten-character string generated by the framework. To customize the scope identifier format, update the project file to a desired pattern:

<code>
    &lt;ItemGroup&gt;
  &lt;None Update="{Pages|Views}/Index.cshtml.css" CssScope="custom-scope-identifier" /&gt;
  &lt;/ItemGroup&gt;
</code>
      
In the preceding example, the CSS generated for Index.cshtml.css changes its scope identifier from b-{STRING} to custom-scope-identifier.

Use scope identifiers to achieve inheritance with scoped CSS files. In the following project file example, a BaseView.cshtml.css file contains common styles across views. A DerivedView.cshtml.css file inherits these styles.

<code>
 &lt;ItemGroup&gt;
   &lt;None Update="{Pages|Views}/BaseView.cshtml.css" CssScope="custom-scope-identifier" /&gt;
   &lt;None Update="{Pages|Views}/DerivedView.cshtml.css" CssScope="custom-scope-identifier" /&gt;
&lt;/ItemGroup&gt;
</code>

Use the wildcard operator to share scope identifiers across multiple files:

<code>
 &lt;ItemGroup&gt;
  &lt;None Update="{Pages|Views}/*.cshtml.css" CssScope="custom-scope-identifier" /&gt;
 &lt;/ItemGroup&gt;
</code>

