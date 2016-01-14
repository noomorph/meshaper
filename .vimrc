set wildignore=*/node_modules/*,*/typings/,*.js,*.map
set expandtab
set ts=4 sw=4 sts=4

function! StrTrim(txt)
  return substitute(a:txt, '^\n*\s*\(.\{-}\)\n*\s*$', '\1', '')
endfunction

let $PATH = StrTrim(system('npm bin'))."/:".$PATH
let g:syntastic_typescript_tsc_args = "-t ES5 --module commonjs --sourcemap --jsx"
let g:typescript_compiler_options = "-t ES5 --module commonjs --sourcemap --jsx"
" let g:ctrlp_custom_ignore = 'node_modules\|DS_Store\|git\|\.js$|\.map$'
" let g:syntastic_debug             = 1
