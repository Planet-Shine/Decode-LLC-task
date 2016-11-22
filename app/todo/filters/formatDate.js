
module.exports = (module) => {
    module.filter('dateFormat', function () {
        return function (input, fieldName) {
            return input.map((item) => {
                var now,
                    yesterday,
                    tomorrow,
                    dayName,
                    dateCaption,
                    createdAt,
                    dayCollection;

                createdAt = new Date(item[fieldName]);

                // createdAt = new Date(new Date().getTime() + parseInt(Math.random() * (4 * 86400000), 10) - (2 * 86400000));

                dayName   = createdAt.getDay();
                createdAt = [createdAt.getDate(),
                    createdAt.getMonth() + 1,
                    createdAt.getFullYear()].join('.');

                now = new Date();
                now = [now.getDate(),
                    now.getMonth() + 1,
                    now.getFullYear()].join('.');

                yesterday = new Date();
                yesterday = new Date(yesterday.getFullYear(), yesterday.getMonth(), yesterday.getDate() - 1);
                yesterday = [yesterday.getDate(),
                    yesterday.getMonth() + 1,
                    yesterday.getFullYear()].join('.');

                tomorrow = new Date();
                tomorrow = new Date(tomorrow.getFullYear(), tomorrow.getMonth(), tomorrow.getDate() + 1);
                tomorrow = [tomorrow.getDate(),
                    tomorrow.getMonth() + 1,
                    tomorrow.getFullYear()].join('.');

                dayCollection            = {};
                dayCollection[now]       = 'today';
                dayCollection[yesterday] = 'yesterday';
                dayCollection[tomorrow]  = 'tomorrow';

                if (dayCollection.hasOwnProperty(createdAt)) {
                    dayName = dayCollection[createdAt];
                }


                item['dateCaption'] = createdAt;
                item['dayName']     = dayName;

                return item;
            });
        }
    });
};
