# Notes on Cognito Assessment

Feels a bit weird providing a big blob of code wordlessly so thought I'd have a few notes here. Generally I enjoyed doing it and I think its a fair showing of what I can do (...with limited time/short cuts/rough edges etc etc...)

Hopefully I get the chance to explain it in a call soon!


## Task 1: React Fundamentals

Fairly straightforward, I used Vite and Bun as I haven't used it before so thought it would be interesting. Turns out Bun doesn't fully support Jest so reverted to Node for the sake of time.

I stuck to a basic fetch implementation for the API call with simple loading and error handling. For a real app with lots of endpoints and data flying around, I would typically reach for something a bit more organised like React/RTK Query to manage and handle responses with state management. 


## Task 2: Component Architecture

I have the components mentioned but also broke it down into smaller components sometimes as I am a tiny component fan for readability, performance and testing. I have sprinkled comments all over the place just to explain why I did what I did. In RL I normally use comments less randomly, normally where there is an interesting 'why' something is the way it is done.

## Task 3: State Management

For this I just used React Context and localstorage as I didn't think this use case warranted busting out a full Redux (or other state management package) setup.


## Task 4: Styling

Hopefully Tailwind counts as a CSS preprocessor? its what I have been using lately but otherwise would use styled components as I prefer my CSS tightly scoped and close to where its used. 

Styling and working on the UX of an app is like catnip to me and I spent the majority of the time here making a nice look and feel for a hypothetical user. 

In terms of responsive design, the general design should work at varying widths but I 'nudged' some components that benefit with a different look at narrow viewports.

Also, I am a dark mode fan so the app follows your system theme and styles accordingly. You can guess where I took *inspiration* for the typography and palette. 
 
## Task 5: Testing

I had a little trouble with my original runtime (bun, again for the learning) and vite not playing nicely with the test runner so I was a little rough with the implementation here.

I have provided unit tests for:

- The ProductDetails component
- The ButtonBasketAdd component

I did two as I thought it gave more of a scope both presentation and functionality tests since I tried to keep the components small (which does makes things more testable at least).
