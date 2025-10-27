const key = document.querySelector('.key');
window.addEventListener('keydown', (e) => {
  
  key.innerHTML = `
     <table>
      <tr>
          <td>
             Key
          </td>
          <td>
          KeyCode 
          </td>
          <td>
          KeyName
          </td>
      </tr>
      <tr>
       <td>
       ${e.key===" "?"space":e.key}
       </td>
       <td>
        ${e.keyCode}
       </td>
       <td>
          ${e.code}
       </td>
      </tr>
     
     </table>
  `

})