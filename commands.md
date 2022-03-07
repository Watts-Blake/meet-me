npm i

//venues
npx sequelize model:generate --name Venue --attributes name:string,address:string,city:string,state:string,zipCode:string,lat:decimal,long:decimal

//types
npx sequelize model:generate --name Type --attributes type:string

//Events
npx sequelize model:generate --name Event --attributes hostId:integer,venueId:integer,typeId:integer,name:string,date:date,image:string,capacity:integer

//Rsvp's
npx sequelize model:generate --name Rsvp --attributes eventId:integer,userId:integer

//Groups
npx sequelize model:generate --name Group --attributes ownerId:integer,typeId:integer,name:string,details:text,image:string

//GroupMembers
npx sequelize model:generate --name GroupMember --attributes groupId:integer,userId:integer
