module.exports = (users)=>`<section class="users">
    <h2>User list</h2>
<ul>
    ${users?users.map(({ username }) => `<li><a h="#">${username}</a></li>`).join(''):''}
</ul>
</section>`
