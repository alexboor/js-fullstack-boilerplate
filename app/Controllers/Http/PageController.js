'use strict';

class PageController {

    showDashboard({view, auth, params}) {
        return view.render('dashboard');
    }

}

module.exports = PageController;
