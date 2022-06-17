###### Task Description

- [x] Users are able to search universities on the university search page based on selected query parameters.
- [x] Users are able to see random user information when clicking the button or avatar.
- [] In create user page users can fill out the form and submit it.
- [x] In the users filter page, random 100 users' info should be filterable as live search.

###### University Search Page

- [x] Create a UniversityFilter component for university search. It is your choice to select filter parameters (at least 3) from API response parameters (can be found in the doc).
- [x] Send the filter data as search-query to the Public API.
- [x] List the results
- [x] Also paginated

###### User Search Page

- [x] Retrieve random 100 users as ?results=100.
- [x] Create a UserFilter component for user search from retrieved 100 users. Filter parameters can be email and gender. Email filter should be a text field,and
      should filter the results in realtime, which means, according to written text in the email search bar, rendered users on the page should change. Both filters should work
      coordinately.
- [x] List the filtered results.
- [x] While listing results, add pagination (page's up-limit is 50 items (I made it 10 for UI/UX purposes)).

###### Profile Popup

- [x] Create a UserDetailModal popup component and when its opened show user info from https://randomuser.me/api/ (instead of re-fetching from the api to show the details, i used prop-drilling, because api needs seed value to find the right data)

###### Create User Page

- [x] Build a UserCreateForm component with body parameters (name,lastName,email,gender) and post it to https://randomuser.me/api/ then handle and log the error (because API does not have POST request end-point).

###### Styling

- [] Styling depends on your imagination for this task
- [] No need to be detailed styling but it's great to have class names that are well-named and well structured
- [] Prefer separated .scss files rather than in component styling (styled components)
