# Fetch_API
 Learning how to use Fetch and make banana talks

# Notes to Self
. Never call a function *with an argument* if you want to invoke it only on Click or any other Event Listener
. If the JS file is in <Head> section, it loads before the DOM. Hence, some ids  or elements of DOM might be taken as Null by JS since it executes first. 

Soultion: Either use document.ready to load JS after the DOM is loaded or use JS file in the lower section of the html after declaring all the required stuffs.
