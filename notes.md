upload.wikimedia.org/wikipedia/commons/thumb/3/38/Baconbutty.jpg/120px-Baconbutty.jpg
upload.wikimedia.org/wikipedia/commons/3/38/Baconbutty.jpg

upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Bacon%2C_egg_and_cheese_sandwich.jpg/120px-Bacon%2C_egg_and_cheese_sandwich.jpg
upload.wikimedia.org/wikipedia/commons/7/7f/Bacon%2C_egg_and_cheese_sandwich.jpg

upload.wikimedia.org/wikipedia/commons/thumb/5/58/Baked_bean_sandwich.jpg/120px-Baked_bean_sandwich.jpg
upload.wikimedia.org/wikipedia/commons/5/58/Baked_bean_sandwich.jpg

//Remove thumb
//remove anything after last backslash]

/(\/thum)\w+/g

/(\/120px-)\w+\.jpg/g

Match any not whitespace after /120px-
/(\/120px-)\S+/g

Match everything up to 120px- 
.+?(?:120px-)