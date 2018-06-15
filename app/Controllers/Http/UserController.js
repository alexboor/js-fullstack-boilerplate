'use strict';

class UserController {

    /**
     * signinForm
     *
     * Sign in form
     *
     * @param view
     * @return {Promise<*>}
     */
    async signinForm({ response, view, auth }) {
        try {
            const user = await auth.getUser();

            if (user.isAdmin) {
                return response.redirect('/dashboard')
            } else {
                return response.redirect('/')
            }

        } catch(err) {
            return view.render('signin');
        }


    }

    /**
     * signinPost
     *
     * Login attempt
     *
     * @param request
     * @param auth
     * @param response
     * @return {Promise<*>}
     */
    async signinPost ({request, auth, response}) {
        const { email, password } = request.all();

        try {
            const user = await auth.attempt(email, password);
            if (user.isAdmin) {
                return { ok:true, path: '/dashboard' }
            } else {
                return { ok:true, path: '/' }
            }
        } catch(err) {
            return { ok:false, error: err.message.split(':')[1] };
        }
    }



    async logout({request, auth, response}) {
        try {
            const user = await auth.getUser();

            await auth.logout();
        } catch(err) {

        }

        return response.redirect('/');
    }

}

module.exports = UserController;
