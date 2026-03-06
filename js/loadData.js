
async function loadProfile(){
const res = await fetch('data/profile.json')
const data = await res.json()

document.getElementById('profileName').textContent = 'ชื่อ : ' + data.name
document.getElementById('profilePosition').textContent = 'ตำแหน่ง : ' + data.position
document.getElementById('profileSchool').textContent = 'โรงเรียน : ' + data.school
document.getElementById('profileSubject').textContent = 'วิชาที่สอน : ' + data.subject
document.getElementById('profileBio').textContent = data.bio

document.getElementById('profileImg').src = data.image
}

async function loadEducation(){
const res = await fetch('data/education.json')
const data = await res.json()

const container = document.getElementById('educationContainer')

data.education.forEach(e=>{

container.innerHTML += `
<div class="card">
<p>ระดับการศึกษา : ${e.level}</p>
<p>สาขา : ${e.major}</p>
<p>สถาบัน : ${e.school}</p>
<p>ปี : ${e.year}</p>
</div>
`
})
}

async function loadYearlyWorks(){
const res = await fetch('data/yearlyWorks.json')
const data = await res.json()

const container = document.getElementById('yearlyWorksContainer')

data.works.forEach(w=>{

container.innerHTML += `
<div class="card">
<img src="${w.image}">
<p>ปีการศึกษา : ${w.year}</p>
<p>${w.title}</p>
<p>${w.description}</p>
</div>
`
})
}

async function loadEvidence(){
const res = await fetch('data/evidenceWorks.json')
const data = await res.json()

const container = document.getElementById('evidenceContainer')

data.evidences.forEach(e=>{

container.innerHTML += `
<div class="card">
<img src="${e.image}">
<p>${e.title}</p>
<p>${e.description}</p>
<p>ปี : ${e.year}</p>
</div>
`
})
}

async function loadAlbums(){
const res = await fetch('data/albums.json')
const data = await res.json()

const container = document.getElementById('albumsContainer')

data.albums.forEach(a=>{

container.innerHTML += `
<div class="card">
<img src="${a.cover}">
<p>${a.title}</p>
<a href="${a.link}" target="_blank">
<button>ดูอัลบั้ม</button>
</a>
</div>
`
})
}

loadProfile()
loadEducation()
loadYearlyWorks()
loadEvidence()
loadAlbums()
