//https://www.codewars.com/kata/52a89c2ea8ddc5547a000863

//Attempt#1 Rabbit and Turtle Algorithm
//Need more practice on Linked List
function loop_size(node) {
    let slow = node;
    let fast = node;
    let count = 0;
  
    do {
        slow = slow.next;
        fast = fast.next.next;
    } while(fast !== slow)
    
    do {
        count++;
        fast = fast.next;
    } while(fast !== slow)
      
    return count;
}