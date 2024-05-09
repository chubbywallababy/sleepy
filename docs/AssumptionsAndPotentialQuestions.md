# What is this doc?

This document is meant to keep:

- Assumptions tracked which were made during the coding process and the logic behind the assumption.
- Potential questions that might be good for a future interview.

<br>
<hr>

Q

What did you do for theming?

### A

A I tried to follow the same pattern in the app - The theme is always dark. I did not follow standard procedures for creating a theme provider object and passing that down, as I wanted to focus on data managment practices and UI quality.

<br>
<hr>

Q

What was done in respect to the API calls and what could be done to improve that aspect of the app?

A

The API calls to the AWS files were done using the JS fetch API. If there was any layer of authentication, I'd implement a shared Axios instance that would keep track of tokens any anything else related to timeouts, logout logic, etc.

<br>
<hr>

Q

What was the decision making process with the preemptive loading?

A

To make each user list cell more informative, I wanted to show two or three sleep KPI's. In order to show relevant sleep data on the users list view, we needed to fetch each of the users info. Users will probably only want to drill down if they can see something is immediately wrong. Otherwise they'll have to drill down, analyze what's on that page, then click out or whatever. If they can instead do a quick sanity check on the family list, it provides a better UX.

The biggest issue for this is scalability - what happens when each user has 1 years worth of sleep history? It's too much to preemptively call. This would bog down the server and client.

We would need a BE solution, something like a KPI api for each user, or another way to get a summary to display.

<br>
<hr>

Q

What is the process for reloading the users if someone gets added?

A

<br>
<hr>

Q

A