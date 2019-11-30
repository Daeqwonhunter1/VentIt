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
    <LoginForm/><RegisterForm/>
 <Main/>
  <SubVents/>
    <Posts/>
       <PostForm/>
       <Comments/>
 <Footer/>
```
      
