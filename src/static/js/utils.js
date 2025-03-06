export function deleteAllCookies() { //Funcion para borrar todas las cookies
  const cookies = document.cookie.split(";");
  for (let cookie of cookies) {
      const eqPos = cookie.indexOf("=");
      const name = eqPos > -1 ? cookie.substring(0, eqPos).trim() : cookie.trim();
      // Eliminar la cookie configurando una fecha de expiración en el pasado
      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;  //funciona en local
      document.cookie = `${name}=;Max-Age=0;Path=/;SameSite=None;Secure;Partitioned;`   //funciona en produccion
  }
}

export function getCookie(name) {  //Funcion para obtener una cookie en especifico
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  return parts.length > 1 ? parts.pop().split(';').shift() : null;
}