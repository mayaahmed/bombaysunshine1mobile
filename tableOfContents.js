
 var tableDiv = document.getElementById("tableOfContentsDiv");
Home = "<a href='index.html' class='tocLinks'> Home </a>";

chapter1 = " <br/> <br/> <a href='chapter1.html' class='tocLinks'> 1. A Sister's Wedding </a>";
chapter2 = " <br\> <a href='chapter2riots.html' class='tocLinks'> 2. Riots. </a>";
chapter3 = " <br\> <a href='chapter3drum.html' class='tocLinks'>  3. Black Magic with Drumsticks. </a>";
chapter4 = " <br\> <a href='chapter4frlove.html' class='tocLinks'> 4. A friend in love. </a>";
chapter5 = " <br\> <a href='chapter5domviol.html' class='tocLinks'> 5. Domestic Violence. </a>";
chapter6 = " <br\> <a href='chapter6picnic.html' class='tocLinks'> 6. The Class picnic.  </a>";
chapter7 = " <br\> <a href='chapter7apfool.html' class='tocLinks'> 7. Opening a Pandora's box. </a>";
chapter8 = "<br\> <a href='chapter8diwali.html' class='tocLinks'>  8. Festival of lights. </a>";
chapter9 = " <br\> <a href='chapter9floods.html' class='tocLinks'>  9. Bombay monsoons. </a>";
chapter10 = " <br\> <a href='chapter10bird.html' class='tocLinks'>  10. Caged bird.  </a>";
chapter11 = " <br\> <a href='chapter11sweets.html' class='tocLinks'> 11. Sweet nothings.  </a>";
chapter12 = " <br\> <a href='chapter12holi.html' class='tocLinks'> 12. The festival of colors. </a>";
chapter13 = " <br\> <a href='chapter13sari.html' class='tocLinks'> 13. Shopping around. </a>";
chapter14 = " <br\> <a href='chapter14namaste.html' class='tocLinks'> 14. Namaste.</a>";
chapter15 = " <br\> <a href='chapter15goodbye.html' class='tocLinks'> 15. Farewell good friend.</a>";
chapter16 = " <br\> <a href='chapter16thief.html' class='tocLinks'> 16. The Thief.</a>";
chapter17 = " <br\> <a href='chapter17contrast.html' class='tocLinks'> 17. The many faces of women.</a>";
chapter18 = " <br\> <a href='chapter18summer.html' class='tocLinks'> 18. Bombay Summer nights. </a>";

function toc(){
  tableDiv.innerHTML=Home+chapter1+chapter2+ chapter3+chapter4 + chapter5+chapter6 +chapter7+chapter8 +chapter9+chapter10 +chapter11 +chapter12 +chapter13+chapter14 +chapter15+chapter16 +chapter17 +chapter18;
 }

toc();
