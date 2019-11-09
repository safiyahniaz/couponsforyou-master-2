var app = new Vue({
    el: '#app',
    data: {
        coupons: [
            {
                companyName: 'KFC',
                code: '2TENDERS',
                price: '$4.95',
                couponName: '2pc Chicken Meal',
                dueDate: '19 Nov 2019',
                invalidPlaces: 'KFC Jewel Changi Airport, Kidzania and Singapore Zoo',
                invalidThings: 'KFC Delivery and KFC Corporate Events',
                gambar: ""
            },
            {
                companyName: 'KFC',
                code: '2TENDERS',
                price: '$1.95',
                couponName: 'Hot & Crispy Tenders (2 pcs)',
                dueDate: '19 Nov 2019',
                invalidPlaces: 'KFC Jewel Changi Airport, Kidzania and Singapore Zoo',
                invalidThings:'KFC Delivery and KFC Corporate Events',
                gambar: ""
            },
            {
                companyName: 'KFC',
                code: '2TENDERS',
                price: '$4.95',
                couponName: '2pc Chicken Meal',
                dueDate: '19 Nov 2019',
                invalidPlaces: 'KFC Jewel Changi Airport, Kidzania and Singapore Zoo',
                invalidThings: 'KFC Delivery and KFC Corporate Events',
                gambar: ""
            }, {
                companyName: 'KFC',
                code: '2TENDERS',
                price: '$4.95',
                couponName: '2pc Chicken Meal',
                dueDate: '19 Nov 2019',
                invalidPlaces: 'KFC Jewel Changi Airport, Kidzania and Singapore Zoo',
                invalidThings: 'KFC Delivery and KFC Corporate Events',
                gambar: ""
            },

        ],
        selectedCompanyName: null,
        selectedPrice: null,
    },

    methods: {
        companyNameFilterSelected: function (selectedCompanyName) {
            this.selectedCompanyName = selectedCompanyName;
        },
        clearFoodOutletsFilter: function () {
            this.selectedCompanyName = null;
        },
        priceFilterSelected: function (selectedPrice) {
            this.selectedPrice = selectedPrice;
        },
        clearPriceFilter: function () {
            this.selectedPrice = null;
        },
        filteredFoodOutlets: function () {
            const selectedCompanyName = this.selectedCompanyName;
            if (!selectedCompanyName) return this.coupons;

            return this.coupons.filter(function (coupon) {
                if (coupon.companyName === selectedCompanyName) {
                    return true;
                } else {
                    return false;
                }
            });
        },
    },

    computed: {
        filteredCoupons: function () {
            const selectedPrice = this.selectedPrice;
            const selectedCompanyName = this.selectedCompanyName;

            // price is null, companyName is KFC
            console.log({selectedPrice, selectedCompanyName})


            let couponsFilteredByPrice = this.coupons;
            if(selectedPrice){
                // filter
                couponsFilteredByPrice = this.coupons.filter(function (coupon) {
                    if (coupon.price === selectedPrice) {
                        return true;
                    } else {
                        return false;
                    }
                });
            }

            if(!selectedCompanyName){ 
                return couponsFilteredByPrice;   
            }

            console.log("at company name filter, the value of coupons filtered by price", couponsFilteredByPrice)
            const couponsFilteredByPriceAndCompanyName = couponsFilteredByPrice.filter(function(coupon){
                if (coupon.companyName === selectedCompanyName) {
                    return true;
                } else {
                    return false;
                }
            })


            return couponsFilteredByPriceAndCompanyName;
        },
    }

})