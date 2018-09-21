var LibraryGLClear = {
    glClear: function(mask) {
        if (mask == 0x00004000) {
            var v = GLctx.getParameter(GLctx.COLOR_WRITEMASK);
            if (!v[0] && !v[1] && !v[2] && v[3])
                // We are trying to clear alpha only -- skip.
                return;
        }
        GLctx.clear(mask);
    },

    getContainerPosition: function () {
        var id = "gameContainer";
        var rect = document.getElementById(id).getBoundingClientRect();
        var gameContainerTop = rect.top + rect.height / 2;
        var windowHeight = window.innerHeight;
        return gameContainerTop / windowHeight;
    }
};
mergeInto(LibraryManager.library, LibraryGLClear);

