from browser import document
from browser.widgets.dialog import InfoDialog
        
def click(ev):
    InfoDialog("Hello", f"Bonjour, {document['password'].value} !")
        
# associe une fonction à l'événement "click" sur le bouton
document["button1"].bind("click", click)