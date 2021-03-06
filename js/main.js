/**
 * @file Script contenant les fonctions de base
 * @author Jonathan Martel (jmartel@cmaisonneuve.qc.ca)
 * @version 0.1
 * @update 2019-01-21
 * @license Creative Commons BY-NC 3.0 (Licence Creative Commons Attribution - Pas d’utilisation commerciale 3.0 non transposé)
 * @license http://creativecommons.org/licenses/by-nc/3.0/deed.fr
 *
 */

 //const BaseURL = "http://127.0.0.1/vino/";
const BaseURL = document.baseURI;
console.log(BaseURL);
window.addEventListener('load', function() {
    var submitLaBouteilleModifier = document.querySelector(".submitModifierBouteille");
    //Ajout pour la modification, elle est a changer puisque maintenant il ya  dautre données que nous allons recevoir
    //Cette partie ligne 16 a 56 est pour la modification de la bouteille dans le cellier.
	 document.querySelectorAll(".supprimerLivre").forEach(function(element){
          element.addEventListener("click", function(evt){
              let bouteille={
                idBouteille : evt.target.getAttribute('data-id-bouteille'),
                idCellier : evt.target.getAttribute('data-id-cellier')
              }
              let requete = new Request(BaseURL+"index.php?requete=SupprimerBouteilleAuCellier", {method: 'POST', body: JSON.stringify(bouteille)});
              fetch(requete)
              .then(response => {
                  if (response.status === 200) {
                    return response.json();
                  } else {
                    throw new Error('Erreur');
                  }
                })
                .then(response => {
                  console.log(response);
                }).catch(error => {
                  console.error(error);
                });
          })
        })
    if(submitLaBouteilleModifier){
        submitLaBouteilleModifier.addEventListener("click", function(evt){
          evt.preventDefault();
            let bouteille = {
              idBouteille : document.querySelector("[name='idBouteille']"),
              idBouteilleCellier : document.querySelector("[name='idBouteilleCellier']"),
              idCellier : document.querySelector("[name='idCellier']"),
              nom : document.querySelector("[name='nom']"),
              format : document.querySelector("[name='format']"),
              pays : document.querySelector("[name='pays']"),
              prix : document.querySelector("[name='prix']"),
              date_achat : document.querySelector("[name='date_achat']"),
              expiration : document.querySelector("[name='expiration']"),
              quantite : document.querySelector("[name='quantite']"),
              millesime : document.querySelector("[name='millesime']")
            };
            var param = {
              "id_bouteille":parseInt(bouteille.idBouteille.value),
              "id_bouteille_cellier":parseInt(bouteille.idBouteilleCellier.value),
              "id_cellier":parseInt(bouteille.idCellier.value),
              "nom":bouteille.nom.value,
              "format":bouteille.format.value,
              "pays":bouteille.pays.value,
              "prix":bouteille.prix.value,
              "date_achat":bouteille.date_achat.value,
              "expiration":bouteille.expiration.value,
              "quantite":parseInt(bouteille.quantite.value),
              "millesime":bouteille.millesime.value,
            };

          let requete = new Request(BaseURL+"index.php?requete=modifierBouteilleCellier", {method: 'POST', body: JSON.stringify(param)});
          fetch(requete)
            .then(response => {
                if (response.status === 200) {
                  return response.json();
                } else {
                  throw new Error('Erreur');
                }
              })
              .then(response => {
                console.log(response);
              
              }).catch(error => {
                console.error(error);
              });
        });
    }
    document.querySelectorAll(".btnBoire").forEach(function(element){
          element.addEventListener("click", function(evt){
              let id = evt.target.parentElement.dataset.id;
              console.log(id);
              let requete = new Request(BaseURL+"index.php?requete=boireBouteilleCellier", {method: 'POST', body: '{"id": '+id+'}'});
              fetch(requete)
              .then(response => {
                  if (response.status === 200) {
                    return response.json();
                  } else {
                    throw new Error('Erreur');
                  }
                })
                .then(response => {
                  console.log(response);
                  modifierQuantiteBouteilles(response);
                }).catch(error => {
                  console.error(error);
                });
          })
        })
    
   
    
    
    
    
    
    
    
    
    
    
    
    
    document.querySelectorAll(".btnAjouter").forEach(function(element){
        element.addEventListener("click", function(evt){
            let id = evt.target.parentElement.dataset.id;
            console.log(id);
            let requete = new Request(BaseURL+"index.php?requete=ajouterBouteilleCellier", {method: 'POST', body: '{"id": '+id+'}'});
            fetch(requete)
            .then(response => {
                if (response.status === 200) {
                    
                  return response.json();
                } else {
                  throw new Error('Erreur');
                }
              })
              .then(response => {
                modifierQuantiteBouteilles(response);
                console.debug(response);
              }).catch(error => {
                console.error(error);
              });      
        })
    });
    
    let inputRecherchee = document.querySelector("[name='nom_bouteille']");
       inputRecherchee.addEventListener("blur",function(){
        
        
        document.querySelector(".nom_bouteille").style.display = "block";
        document.querySelector(".nomBouteille").style.display = "block";
        document.querySelector(".nom_bouteille").innerHTML=document.querySelector(".input").value;
       
        
        
        
    })
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    let inputNomBouteille = document.querySelector("[name='nom_bouteille']");
  
    let liste = document.querySelector('.listeAutoComplete');
    if(inputNomBouteille){
      inputNomBouteille.addEventListener("keyup", function(evt){
        console.log(inputNomBouteille);
        let nom = inputNomBouteille.value;
        liste.innerHTML = "";
        if(nom){
          let requete = new Request(BaseURL+"index.php?requete=autocompleteBouteille", {method: 'POST', body: '{"nom": "'+nom+'"}'});
          fetch(requete)
              .then(response => {
                  if (response.status === 200) {
                      
                    return response.json();
                  } else {
                    throw new Error('Erreur');
                  }
                })
                .then(response => {
                  console.log(response);
                  response.forEach(function(element){
                   
                    liste.innerHTML += "<li data-id='"+element.id_bouteille +"' classe='mesLi' image='"+element.image_bouteille+"' typeV='"+element.id_type_bouteille+"'>"+element.nom_bouteille+"</li>";
                  })
             
                }).catch(error => {
                  console.error(error);
                });
        }
      });
    }
      let bouteille = {
        nom : document.querySelector(".nom_bouteille"),
        pays : document.querySelector("[name='pays']"),
        millesime : document.querySelector("[name='millesime']"),
        quantite : document.querySelector("[name='quantite']"),
        date_achat : document.querySelector("[name='date_achat']"),
        prix : document.querySelector("[name='prix']"),
        garde_jusqua : document.querySelector("[name='garde_jusqua']"),
        notes : document.querySelector("[name='notes']"),
          
      };
    if(liste){
      liste.addEventListener("click", function(evt){
        console.dir(evt.target)
        document.querySelector(".nom_bouteille").style.display = "block";
        document.querySelector(".nomBouteille").style.display = "block";
        if(evt.target.tagName == "LI"){
            bouteille.image=evt.target.getAttribute('image');
            
        
          bouteille.nom.dataset.id = evt.target.dataset.id;
          bouteille.nom.innerHTML = evt.target.innerHTML;
          liste.innerHTML = "";
          inputNomBouteille.value = "";
            console.log(bouteille.image);
        }
      });
    }
  
  
    
    
    
    
    
  
    
  
    
    
    
    
      let btnAjouter = document.querySelector("[name='ajouterBouteilleCellier']");
      if(btnAjouter){
        btnAjouter.addEventListener("click", function(evt){
            
if(!bouteille.image){

bouteille.image="test";

}
            
            
            
            
            
          var param = {
            "id_bouteille":bouteille.nom.dataset.id,
              "id_cellier":1,
              "nom_bouteille_cellier":bouteille.nom.innerHTML,
              "image_bouteille" :bouteille.image,
               "pays_bouteille":bouteille.pays.value, 
            "date_achat":bouteille.date_achat.value,
            "garde_jusqua":bouteille.garde_jusqua.value,
            "notes":bouteille.date_achat.value,
            "prix":parseFloat(bouteille.prix.value),
            "quantite":bouteille.quantite.value,
            "millesime":bouteille.millesime.value,
               
              "id_type":1,
          };

            console.log(param);

          let requete = new Request(BaseURL+"index.php?requete=ajouterNouvelleBouteilleCellier", {method: 'POST', body: JSON.stringify(param)});
            fetch(requete)
                .then(response => {
                    if (response.status === 200) {
                        
                      return response.json();
                    } else {
                      throw new Error('Erreur');
                    }
                  })
                  .then(response => {
                   
                    console.log(response);
                  }).catch(error => {
                    console.error(error);
                  });
        });
      } 
    function modifierQuantiteBouteilles(objet){
        console.log(objet);
        let quantite=document.querySelectorAll(".quantite").forEach(function(element){
            objet.forEach(function(monElement){
                if(element.dataset.id==monElement.id_bouteille_cellier){
                  element.innerHTML="Quantité : "+monElement.quantite;     
                }    
            })   
        }); 
    }
});

