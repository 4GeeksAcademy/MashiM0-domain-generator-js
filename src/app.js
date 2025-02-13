 //write your code here
  let pronouns = ['the', 'our'];
  let adjs = ['great', 'big'];
  let nouns = ['jogger', 'racoon'];
  let domains = ['.com','.us','.ve','.tv']

    for(const pronoun of pronouns){
      for(const adj of adjs){
        for(const noun of nouns){
          for(const domain of domains){
            console.log(pronoun+adj+noun+domain)
          }
        }
      }
    }

    // Another way
        // for(let i=0;i < pronoun.length;i++){
    //   for(let j=0; j < adj.length; j++){
    //     for(let k=0; k < noun.length; k++){
    //       for(let l=0; l< domain.length; l++){
    //         console.log(pronoun[i] + adj[j]+ noun[k] + domain[l])
    //       }
    //     }
    //   }
    // }