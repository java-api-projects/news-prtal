const handleCategory = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/news/categories');
    const allData = await response.json();

    const data = allData.data.news_category;

    const tabItems = document.getElementById('tabItems')

    data.forEach(category => {
        const div = document.createElement('div');
        // console.log(data);
        div.innerHTML = `
        <a onclick="handleLoadNews('${category.category_id}')" class="tab text-xl text-[#858585]">${category.category_name}</a>
        `
        tabItems.appendChild(div)
    });


}



const handleLoadNews = async (categoryId) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/news/category/${categoryId}`)
    const allData = await response.json();
    const data = allData.data;

    const cardMain = document.getElementById('cardMain');
    cardMain.innerHTML = '';

    data?.forEach(news => {
        console.log(news);
        const div = document.createElement('div')
        div.innerHTML = `
<div class="card  bg-base-100 shadow-xl mb-6" >
                    <figure><img src="${news.image_url
            }" alt="Movie" /></figure>
                    <div class="card-body ">
                        <h2 class="text-2xl font-bold">${news.title}</h2>
                        <p>${news.details}</p>
                        <div class="card-actions ">
                            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center   items-center w-full">
                                <!-- author section -->
                                <div class="flex  gap-5">
                                <div class="avatar online">
                                <div class="w-16 rounded-full">
                                  <img src="${news.author.img}" />
                                        </div>
                                        </div>
                                    <div class="stat-figure ">
                                        <div class="text-xl font-bold">Alvi Asad</div>
                                        <div class="stat-title">Aug 29, 2023</div>
                                    </div>

                                </div>
                                <!-- view section -->
                                <div class="stat">
                                    <div class="stat-figure text-secondary">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            class="inline-block w-8 h-8 stroke-current">
                                            
                                        </svg>
                                    </div>
                                    <div class="stat-title"> Views</div>
                                    <div class="text-xl font-semibold ">${news.total_view}</div>
                                    
                                </div>
                                <!-- rating section -->
                                 <div class="stat place-items-center">
                                    <div class="stat-title">Rating</div>
                                    <div class="text-xl font-semibold text-secondary">${news.rating.number}</div>
                                </div>
                                <!-- button -->
                                <div>
                                    <button class="btn btn-primary">Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

        `
        cardMain.appendChild(div)
    })
}

handleCategory()