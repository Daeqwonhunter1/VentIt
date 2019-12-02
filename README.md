# VentIt
VentIt is a discussion and content rating site which allows users to create and share posts under sub-domains called sub-vents.These sub-vents are also user created and serve as guidelines for the topic of posts.
# Feature List
## MVP 
* Register/Login as user
* Users can comment on posts
* Users can up/downvote posts
* Users can create sub-domains called subvents
* Users can create posts inside subvents
## Post-MVP
* Users can change avatars
* Users can join communities 
* User can change settings
* DarkMode
# ERD
![ERD](https://github.com/Daeqwonhunter1/VentIt/blob/master/Vent%20It%20ERD.png)
# Wireframe
![Register](https://github.com/Daeqwonhunter1/VentIt/blob/master/Register.png)
![LogIn](https://github.com/Daeqwonhunter1/VentIt/blob/master/LogIn.png)
![Sub-domain List](https://github.com/Daeqwonhunter1/VentIt/blob/master/Subdomain-list.png)
![UserPosts](https://github.com/Daeqwonhunter1/VentIt/blob/master/UserPosts.png)
![SinglePost](https://github.com/Daeqwonhunter1/VentIt/blob/master/singlepost.png)
# Component Heiracrchy 
```
 <App/>
 <Header/>
   <Profile/>
   <UserProfile/>
    <LoginForm/><RegisterForm/>
 <Main/>
  <SubVents/>
   <UserSubVent/>
    <SubVentForm/>
    <Posts/>
     <UserPost/>
       <PostForm/>
       <Comments/>
 <Footer/>
```
      
# Endpoints
|Endpoint|Purpose|
|---|---|
|/|Homepage- List of sub-domains(Read,Update,Create,Delete)|
|/create_subvent|User can create a sub-domain(Create)|
|/register|for User registration|
|/login|for User login|
|/user/:username|for User profile|
|/user/settings|for User settings|
|/v/:vent_title| User selected sub-domain,Lists posts in that domain(Read)|
|/v/:vent_title/:post_id|User selected Post(Read,Update,delete)|
|/v/:vent_title/create_post|User creates a post in selected subdomain(Create)|

# Dependencies

## Front-End
* React
* Axios
* React-Router

## Back-End
* Ruby On Rails


# Time Frames
|Component|Priority|Estimated Time|Time Invested|Actual Time|
|---|---|---|---|---|
|UserProfile|H|3h| | |
|LoginForm|H|2h| | |
|RegisterForm|H|2h| | |
|Subvents|H|4h| | |
|UserSubvent|H|3h| | |
|Posts|M|3h| | |
|UserPost|M|3h| | |
|PostForm|M|2h| | |
|Comments|L|3h| | |
