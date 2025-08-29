1)getElementById:
নির্দিষ্ট id যুক্ত html tag কে dom এ select করার জন্য ব্যবহার করা হয়
getElementsByClassName:
নির্দিষ্ট class যুক্ত এক/একাধিক html tag কে dom এ select করার জন্য ব্যবহার করা হয়
querySelector:
css এর মতো করে html tag কে select করা যায়।এইক্ষেত্রে একাধিক একই class / tag থাকলে শুধু প্রথমাটাই select হয়। 
querySelectorAll:
 css এর মতো করে html tag কে select করা যায়।এইক্ষেত্রে একাধিক একই class / tag থাকলে সবগুলোই select হয়।
 
2)const parent=document.getElementById('parent')
const p=document.createElement('p')
parent.appendChild(p)

3)কোনো child tag এ কোনো event থাকলে এটি তার parent এর event (যদি থাকে) -কেও active করে দেয়। 
যেমন: parent div and child div দুুই div-এই যদি click event রয়েছে। এখন যদি child div এ click করা হয় তবে তা parent div -এও click হবে।
এটি মূলত একটি tree এর মতো কাজ করে|

4)event মূলত child এর উপর কাজ করবে কিন্তু handler  parent এর কোনো এক জায়গায় দেওয়া

5)preventDefault():
এটি ব্যবহার করা হয়  form এর ভিতর থাকা button এ auto load off করার জন্য

stopPropagatiob():
event bubble বন্ধ করার জন্য ব্যবহার করা হয়
