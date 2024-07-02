const compile_time=1719927440
function add(x,y,...z)
{
 const n=x+y
 if(is_empty(z))
  return n
 return add(n,...z)
}
function app_name()
{
 const script=argv_script()
 return path_name(script)
}
function append(x,y)
{
 check(is_arr,x)
 check(is_arr,y)
 for(const v of y)
 {
  push(x,v)
 }
}
function argv_arguments()
{
 return slice(process.argv,2)
}
function argv_binary()
{
 return front(process.argv)
}
function argv_script()
{
 return at(process.argv,1)
}
function arr(...x)
{
 return[...x]
}
function at(x,y,z)
{
 check(is_def,x)
 check(is_int,y)
 if(is_def(z))
  x[y]=z
 else
  return x[y]
}
function check(x,...y)
{
 if(is_fn(x))
 {
  const b=x(...y)
  return check(b)
 }
 if(is_true(x))
 {
  if(is_empty(y))
   return
 }
 stop()
}
function compare(x,y)
{
 check(is_def,x)
 check(is_def,y)
 function cmp(x,y)
 {
  check(is_def,x)
  check(is_def,y)
  if(x<y)
   return-1
  if(x>y)
   return 1
  return 0
 }
 if(is_null(x))
 {
  if(is_null(y))
   return cmp(x,y)
 }
 else if(is_bool(x))
 {
  if(is_bool(y))
   return cmp(x,y)
 }
 else if(is_num(x))
 {
  if(is_num(y))
   return cmp(x,y)
 }
 else if(is_str(x))
 {
  if(is_str(y))
   return cmp(x,y)
 }
 else if(is_arr(x))
 {
  if(is_arr(y))
  {
   const n=min(x.length,y.length)
   for(let i=0;i<n;i++)
   {
    const vx=at(x,i)
    const vy=at(y,i)
    const n=compare(vx,vy)
    if(different(n,0))
     return n
   }
   return compare(x.length,y.length)
  }
 }
 else if(is_obj(x))
 {
  if(is_obj(y))
  {
   const kx=get_keys(x)
   const ky=get_keys(y)
   while(is_full(kx))
   {
    if(is_empty(ky))
     break
    const kvx=shift(kx)
    const kvy=shift(ky)
    const kn=compare(kvx,kvy)
    if(different(kn,0))
     return kn
    const vvx=get(x,kvx)
    const vvy=get(y,kvy)
    const vn=compare(vvx,vvy)
    if(different(vn,0))
     return vn
   }
   return compare(kx.length,ky.length)
  }
 }
 const xs=to_json(x)
 const ys=to_json(y)
 return cmp(xs,ys)
}
function concat(x,...y)
{
 if(is_num(x))
 {
  const s=to_str(x)
  return concat(s,...y)
 }
 if(is_str(x))
 {
  if(is_empty(y))
   return x
  const first=front(y)
  const rest=slice(y,1)
  if(is_num(first))
  {
   const s=to_str(first)
   return concat(x,s,...rest)
  }
  check(is_str,first)
  const s=x+first
  return concat(s,...rest)
 }
 if(is_arr(x))
 {
  if(is_empty(y))
   return x
  const first=front(y)
  const rest=slice(y,1)
  check(is_arr,first)
  const a=dup(x)
  append(a,first)
  return concat(a,...rest)
 }
 stop()
}
function contain(x,y)
{
 check(is_vec,x)
 if(is_str(x))
 {
  check(is_str,y)
  return x.includes(y)
 }
 return x.includes(y)
}
function delimit(x,y)
{
 check(is_vec,x)
 check(is_str,y)
 if(is_str(x))
 {
  const a=arr(x)
  return delimit(a,y)
 }
 const r=arr()
 for(const v of x)
 {
  const a=split(v,y)
  for(const v of a)
  {
   if(is_full(v))
    push(r,v)
  }
 }
 return r
}
function different(x,y)
{
 return!same(x,y)
}
function dir_make(x)
{
 check(is_str,x)
 const recursive=true
 const option={recursive}
 fs.mkdirSync(x,option)
}
function dir_read_rec(x,y)
{
 check(is_str,x)
 if(is_undef(y))
  return dir_read_rec(x,is_file)
 check(is_fn,y)
 const r=arr()
 const dir=path_real(x)
 const recursive=true
 const option={recursive}
 for(const v of fs.readdirSync(dir,option))
 {
  const path=path_concat(dir,v)
  const b=y(path)
  if(is_true(b))
   push(r,path)
  else
   check(is_false,b)
 }
 return r
}
function dir_read(x,y)
{
 check(is_str,x)
 if(is_undef(y))
  return dir_read(x,is_file)
 check(is_fn,y)
 const r=arr()
 const dir=path_real(x)
 for(const v of fs.readdirSync(dir))
 {
  const path=path_concat(dir,v)
  const b=y(path)
  if(is_true(b))
   push(r,path)
  else
   check(is_false,b)
 }
 return r
}
function div(x,y,...z)
{
 check(different,y,0)
 const n=x/y
 if(is_empty(z))
  return n
 return div(n,...z)
}
function every(x,y)
{
 check(is_arr,x)
 check(is_fn,y)
 for(const v of x)
 {
  const b=y(v)
  if(is_false(b))
   return false
  check(is_true,b)
 }
 return true
}
function file_read(x,y)
{
 if(is_undef(y))
  return file_read(x,"utf8")
 check(is_str,x)
 check(is_str,y)
 const b=fs.readFileSync(x)
 return b.toString(y)
}
function file_save(x,y)
{
 check(is_str,x)
 check(is_str,y)
 if(is_file(x))
 {
  const n=file_size(x)
  if(same(n,y.length))
  {
   const s=file_read(x)
   if(same(s,y))
    return
  }
 }
 const dir=path_dir(x)
 if(!is_dir(dir))
  dir_make(dir)
 file_write(x,y)
}
function file_size(x)
{
 check(is_str,x)
 const o=fs.lstatSync(x)
 return o.size
}
function file_write(x,y)
{
 check(is_str,x)
 check(is_str,y)
 fs.writeFileSync(x,y)
}
function find(x,y)
{
 check(is_arr,x)
 check(is_def,y)
 return x.indexOf(y)
}
function front(x)
{
 check(is_def,x)
 return at(x,0)
}
function fs_remove(x)
{
 check(is_str,x)
 const force=true
 const recursive=true
 const option={force,recursive}
 fs.rmSync(x,option)
}
function get_keys(x)
{
 check(is_obj,x)
 return Object.keys(x)
}
function get(x,y,z)
{
 check(is_def,x)
 check(is_str,y)
 if(has(x,y))
  return x[y]
 check(is_def,z)
 return z
}
function gn_run(x,y,...z)
{
 check(is_xn,x)
 if(is_fn(x))
 {
  const fn=x
  function*gn(...x)
  {
   yield
   return fn(...x)
  }
  return gn_run(gn,y,...z)
 }
 if(is_undef(y))
  return gn_run(x,nop,...z)
 check(is_fn,y)
 const complete=y
 const iterator=x(...z)
 const frequency=div(1,32)
 const threshold=64
 let result=null
 function cycle()
 {
  const begin=time_now()
  for(let i=0;i<threshold;i++)
  {
   const o=iterator.next()
   if(o.done)
   {
    result=o.value
    return true
   }
   const now=time_now()
   const duration=sub(now,begin)
   if(gt(duration,frequency))
    break
  }
  return false
 }
 function tick()
 {
  const finished=cycle()
  if(finished)
   complete(result)
  else
   timer_timeout(tick,frequency)
 }
 tick()
 return iterator
}
function gt(x,y)
{
 check(is_def,x)
 check(is_def,y)
 const n=compare(x,y)
 return n>0
}
function gte(x,y)
{
 check(is_def,x)
 check(is_def,y)
 const n=compare(x,y)
 return n>=0
}
function head(x,y)
{
 check(is_vec,x)
 check(is_uint,y)
 if(lte(x.length,y))
 {
  if(is_arr(x))
   return dup(x)
  return x
 }
 return slice_l(x,y)
}
function implode(x)
{
 check(is_arr,x)
 return join(x,"")
}
function init()
{
 let platform=null
 let scope=null
 try
 {
  scope=global
 }
 catch
 {
 }
 if(is_null(scope))
 {
  platform="browser"
  scope=window
  scope.global=window
 }
 else
  platform="node"
 global.alive=true
 global.platform=platform
 global.startup=time_get()
 global.puncts="!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
 const parameters=arr()
 if(is_node())
 {
  global.cp=require("child_process")
  global.fs=require("fs")
  global.os=require("os")
  global.path=require("path")
  global.util=require("util")
  global.terminal_width=process.stdout.columns
  const a=argv_arguments()
  append(parameters,a)
 }
 if(is_undef(global.terminal_width))
  global.terminal_width=144
 gn_run(init_platform,nop,...parameters)
}
function inspect(x)
{
 const depth=null
 const colors=true
 const maxArrayLength=null
 const maxStringLength=null
 const option={depth,colors,maxArrayLength,maxStringLength}
 const s=util.inspect(x,option)
 log(s)
}
function is_alnum(x)
{
 if(!is_str(x))
  return false
 if(is_empty(x))
  return false
 for(const v of x)
 {
  if(same(v,"_"))
   ;
  else if(is_alpha(v))
   ;
  else if(is_digit(v))
   ;
  else
   return false
 }
 return true
}
function is_alpha(x)
{
 if(!is_str(x))
  return false
 if(is_empty(x))
  return false
 const low="abcdefghijklmnopqrstuvwxyz"
 const high="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
 for(const v of x)
 {
  if(contain(low,v))
   ;
  else if(contain(high,v))
   ;
  else
   return false
 }
 return true
}
function is_arr(x)
{
 return Array.isArray(x)
}
function is_bool(x)
{
 const s=typeof(x)
 return same(s,"boolean")
}
function is_browser(x)
{
 return same(platform,"browser")
}
function is_def(x)
{
 return!is_undef(x)
}
function is_digit(x)
{
 if(!is_str(x))
  return false
 if(is_empty(x))
  return false
 const s="0123456789"
 for(const v of x)
 {
  if(contain(s,v))
   ;
  else
   return false
 }
 return true
}
function is_dir(x)
{
 if(!is_str(x))
  return false
 const throwIfNoEntry=false
 const option={throwIfNoEntry}
 let o
 try
 {
  o=fs.lstatSync(x,option)
 }
 catch
 {
 }
 if(is_undef(o))
  return false
 return o.isDirectory()
}
function is_empty(x)
{
 if(is_vec(x))
  return same(x.length,0)
 if(is_obj(x))
 {
  for(const v in x)
  {
   return false
  }
  return true
 }
 return false
}
function is_false(x)
{
 return same(x,false)
}
function is_file(x)
{
 if(!is_str(x))
  return false
 const throwIfNoEntry=false
 const option={throwIfNoEntry}
 let o
 try
 {
  o=fs.lstatSync(x,option)
 }
 catch
 {
 }
 if(is_undef(o))
  return false
 return o.isFile()
}
function is_fn(x)
{
 const s=typeof x
 if(different(s,"function"))
  return false
 if(is_gn(x))
  return false
 return true
}
function is_fs(x)
{
 if(is_file(x))
  return true
 if(is_dir(x))
  return true
 return false
}
function is_full(x)
{
 return!is_empty(x)
}
function is_gn(x)
{
 if(is_undef(x))
  return false
 if(is_null(x))
  return false
 const constructor=x.constructor
 if(is_def(constructor))
  return same(constructor.name,"GeneratorFunction")
 return false
}
function is_identifier(x)
{
 if(!is_str(x))
  return false
 if(is_empty(x))
  return false
 const c=front(x)
 if(same(c,"_"))
  ;
 else if(is_alpha(c))
  ;
 else
  return false
 for(const v of x)
 {
  if(!is_alnum(v))
   return false
 }
 return true
}
function is_int(x)
{
 return Number.isInteger(x)
}
function is_node(x)
{
 return same(platform,"node")
}
function is_null(x)
{
 return same(x,null)
}
function is_num(x)
{
 const s=typeof(x)
 if(different(s,"number"))
  return false
 if(Number.isNaN(x))
  return false
 if(!Number.isFinite(x))
  return false
 return true
}
function is_obj(x)
{
 const s=typeof(x)
 if(!same(s,"object"))
  return false
 if(is_null(x))
  return false
 if(is_arr(x))
  return false
 return true
}
function is_str(x)
{
 const s=typeof(x)
 return same(s,"string")
}
function is_true(x)
{
 return same(x,true)
}
function is_uint(x)
{
 if(!is_int(x))
  return false
 return gte(x,0)
}
function is_undef(x)
{
 return same(x,undefined)
}
function is_vec(x)
{
 if(is_str(x))
  return true
 if(is_arr(x))
  return true
 return false
}
function is_xn(x)
{
 if(is_fn(x))
  return true
 if(is_gn(x))
  return true
 return false
}
function join(x,y)
{
 check(is_arr,x)
 if(is_undef(y))
  return join(x,"\n")
 check(is_str,y)
 return x.join(y)
}
function log(...x)
{
 if(is_node())
 {
  if(every(x,is_str))
  {
   const s=join(x," ")
   const t=txt_left(s,terminal_width)
   console.log(t)
   return
  }
 }
 console.log(...x)
}
function lt(x,y)
{
 check(is_def,x)
 check(is_def,y)
 const n=compare(x,y)
 return n<0
}
function lte(x,y)
{
 check(is_def,x)
 check(is_def,y)
 const n=compare(x,y)
 return n<=0
}
function match_l(x,y)
{
 check(is_str,x)
 check(is_str,y)
 if(is_empty(x))
  return false
 if(is_empty(y))
  return false
 return x.startsWith(y)
}
function max(...x)
{
 return Math.max(...x)
}
function min(...x)
{
 return Math.min(...x)
}
function mul(x,y,...z)
{
 const n=x*y
 if(is_empty(z))
  return n
 return mul(n,...z)
}
function nop()
{
}
function os_system(x,...y)
{
 check(is_str,x)
 const stdio="inherit"
 const maxBuffer=mul(1,1024,1024,1024)
 const option={stdio,maxBuffer}
 cp.spawnSync(x,y,option)
}
function path_base(x)
{
 check(is_str,x)
 const a=path_split(x)
 return back(a)
}
function path_concat(...x)
{
 return join(x,"/")
}
function path_dir(x)
{
 check(is_str,x)
 return path.dirname(x)
}
function path_name(x)
{
 check(is_str,x)
 const o=path.parse(x)
 return o.name
}
function path_real(x)
{
 check(is_str,x)
 return fs.realpathSync(x)
}
function path_split(x)
{
 check(is_str,x)
 return split(x,"/")
}
function push(x,y)
{
 check(is_arr,x)
 check(is_def,y)
 x.push(y)
}
function remove(x,y,z)
{
 check(is_arr,x)
 check(is_uint,y)
 if(is_undef(z))
  return remove(x,y,1)
 check(is_uint,z)
 let n=add(y,z)
 check(lt,y,x.length)
 check(lte,n,x.length)
 x.splice(y,z)
}
function replace(x,y,z)
{
 check(is_vec,x)
 check(is_def,x)
 check(is_def,x)
 if(is_str(x))
 {
  check(is_str,y)
  check(is_str,z)
  const a=split(x,y)
  return join(a,z)
 }
 check(is_arr,x)
 const r=arr()
 for(const v of x)
 {
  if(same(v,y))
   push(r,z)
  else
   push(r,v)
 }
 return r
}
function same(x,y)
{
 return x===y
}
function slice_l(x,y)
{
 check(is_vec,x)
 check(is_uint,y)
 return slice(x,0,y)
}
function slice_r(x,y)
{
 check(is_vec,x)
 check(is_uint,y)
 const n=sub(x.length,y)
 return slice(x,n,y)
}
function slice(x,y,z)
{
 check(is_vec,x)
 check(is_num,y)
 if(is_undef(z))
 {
  const n=sub(x.length,y)
  return slice(x,y,n)
 }
 check(is_num,z)
 const n=add(y,z)
 return x.slice(y,n)
}
function sort(x,y)
{
 check(is_arr,x)
 if(is_def(y))
 {
  check(is_fn,y)
  x.sort(y)
 }
 else
  x.sort(y)
}
function split(x,y)
{
 check(is_str,x)
 if(is_undef(y))
  return split(x,"\n")
 check(is_str,y)
 return x.split(y)
}
function stop(x)
{
 if(is_undef(x))
  return stop("stop")
 const e=new Error(x)
 throw e
}
function sub(x,y,...z)
{
 const n=x-y
 if(is_empty(z))
  return n
 return sub(n,...z)
}
function tail(x,y)
{
 check(is_vec,x)
 check(is_uint,y)
 if(lte(x.length,y))
 {
  if(is_arr(x))
   return dup(x)
  return x
 }
 return slice_r(x,y)
}
function time_get()
{
 let r=Date.now()
 r=div(r,1000)
 return r
}
function time_now()
{
 let r=time_get()
 r=sub(r,startup)
 return r
}
function to_json(x)
{
 check(is_def,x)
 return JSON.stringify(x)
}
function to_lit(x)
{
 check(is_str,x)
 return to_json(x)
}
function to_str(x)
{
 check(is_def,x)
 if(is_null(x))
  return"null"
 return x.toString()
}
function tokenize(x)
{
 check(is_vec,x)
 let r=x
 if(is_str(r))
  r=arr(r)
 r=delimit(r," ")
 r=delimit(r,"\r")
 r=delimit(r,"\n")
 r=delimit(r,"\t")
 return r
}
function trim_r(x)
{
 check(is_str,x)
 return x.trimRight()
}
function txt_left(x,y)
{
 check(is_str,x)
 check(is_uint,y)
 const a=arr()
 for(const v of split(x))
 {
  const s=head(v,y)
  push(a,s)
 }
 return join(a)
}
function unshift(x,y)
{
 check(is_arr,x)
 check(is_def,y)
 x.unshift(y)
}
function angle(x)
{
 check(is_str,x)
 return concat("<",x,">")
}
function back(x,y,z)
{
 check(is_def,x)
 if(is_undef(y))
  return back(x,0,z)
 check(is_uint,y)
 check(lt,y,x.length)
 const n=sub(x.length,1,y)
 return at(x,n,z)
}
function brace(x)
{
 check(is_str,x)
 return concat("{",x,"}")
}
function bracket(x)
{
 check(is_str,x)
 return concat("[",x,"]")
}
function chr(x)
{
 check(is_uint,x)
 return String.fromCharCode(x)
}
function clear(x)
{
 check(is_arr,x)
 x.splice(0)
}
function clone(x)
{
 check(is_def,x)
 return structuredClone(x)
}
function collate(x)
{
 check(is_arr,x)
 const a=arr()
 for(const v of x)
 {
  if(is_empty(a))
  {
   push(a,v)
   continue
  }
  const left1=back(a)
  const left2=back(left1)
  const right1=v
  const right2=front(v)
  if(is_punct(left2))
  {
  }
  else if(is_punct(right2))
  {
  }
  else
  {
   push(a,right1)
   continue
  }
  const s=concat(left1,right1)
  drop(a)
  push(a,s)
 }
 return join(a," ")
}
function dbg_backtrace(x)
{
 if(is_undef(x))
 {
  const o=new Error("backtrace")
  return dbg_backtrace(o)
 }
 check(is_obj,x)
 const r=arr()
 const s=to_str(x.stack)
 const lines=split(s)
 for(const k in lines)
 {
  const i=to_i(k)
  const v=at(lines,i)
  let s=v
  s=trim(s)
  s=strip_l(s,"at")
  s=trim(s)
  s=replace(s,"@"," ")
  const parts=split(s," ")
  if(!is_pair(parts))
   continue
  const fn=shift(parts)
  if(!is_name(fn))
   continue
  let a=parts
  a=shift(a)
  a=unparen(a)
  a=split(a,":")
  if(lt(a.length,3))
   continue
  const column=pop(a)
  let line=pop(a)
  line=to_uint(line)
  const url=join(a,":")
  const o={fn,url,line}
  push(r,o)
 }
 return r
}
function dbg_callstack(x)
{
 if(is_undef(x))
 {
  const o=new Error("callstack")
  return dbg_callstack(o)
 }
 function get_trace(x)
 {
  check(is_obj,x)
  const fn=x.fn
  const url=x.url
  const line=x.line
  if(has(scripts,url))
  {
   const index=dec(line)
   if(gte(index,0))
   {
    const script=get(scripts,url)
    if(lt(index,script.length))
    {
     const code=at(script,index)
     return{fn,code,line}
    }
   }
  }
  const code=url
  return{fn,code,line}
 }
 const r=arr()
 decompile_sync()
 for(const v of dbg_backtrace(x))
 {
  const o=get_trace(v)
  push(r,o)
 }
 return r
}
function dbg_log(x)
{
 check(is_obj,x)
 const stack=dbg_callstack(x)
 const trace=dbg_backtrace(x)
 const origin=dbg_origin(x)
 tbl_align_r(stack,"fn")
 tbl_align_r(trace,"fn")
 if(is_full(origin))
 {
  const s=tbl_render(origin)
  log(s)
 }
 if(is_empty(stack))
 {
  const s=tbl_render(trace)
  log(s)
 }
 else
 {
  const s=tbl_render(stack)
  log(s)
 }
}
function dbg_origin(x)
{
 if(is_undef(x))
 {
  const o=new Error("origin")
  return dbg_origin(o)
 }
 check(is_obj,x)
 decompile_sync()
 const trace=dbg_backtrace(x)
 while(is_many(trace))
 {
  const frame=front(trace)
  const fn=frame.fn
  const url=frame.url
  const filter=arr("throw","stop","check")
  if(contain(filter,fn))
  {
   shift(trace)
   continue
  }
  if(has(scripts,url))
   break
  shift(trace)
 }
 const frame=front(trace)
 const url=frame.url
 const line=frame.line
 if(!has(scripts,url))
  return arr()
 const index=dec(line)
 if(lt(index,0))
  return arr()
 const script=get(scripts,url)
 if(gte(index,script.length))
  return arr()
 return dbg_window(script,line)
}
function dbg_window(x,y,z)
{
 check(is_arr,x)
 check(is_uint,y)
 if(is_undef(z))
  return dbg_window(x,y,7)
 check(is_uint,z)
 const lines=x
 const length=lines.length
 const number=y
 const offset=dec(number)
 function get_window(x)
 {
  check(is_uint,x)
  let r=arr()
  let window=x
  let half=window
  half=div(half,2)
  half=trunc(half)
  let begin=sub(offset,half)
  if(lt(begin,0))
   begin=0
  let end=add(begin,window)
  if(gt(end,length))
   window=sub(length,begin)
  for(let i=0;i<window;i++)
  {
   const index=add(begin,i)
   const line=inc(index)
   let code=lines
   code=at(code,index)
   if(is_full(code))
   {
    if(same(line,number))
     code=space(">",code)
    else
     code=space(" ",code)
    const o={code,line}
    push(r,o)
   }
  }
  return r
 }
 let r=arr()
 for(let i=0;i<sub(lines.length,z);i++)
 {
  const n=add(i,z)
  r=get_window(i)
  if(gte(r.length,z))
   break
 }
 return r
}
function dec(x)
{
 check(is_num,x)
 return sub(x,1)
}
function decompile_stop()
{
 if(is_null(decompiler))
  return
 decompiler.return()
 decompiler=null
}
function decompile_sync()
{
 if(is_null(decompiler))
  return
 while(true)
 {
  const o=decompiler.next()
  if(o.done)
  {
   decompiler=null
   return o.value
  }
 }
}
function decompile(x)
{
 check(is_str,x)
 function deep(x)
 {
  check(is_str,x)
  let r=x
  r=scan(r)
  r=reject(r,is_space)
  r=replace(r,"!","not")
  r=reject(r,is_punct)
  r=keywords(r)
  r=join(r," ")
  return r
 }
 function shallow(x)
 {
  check(is_str,x)
  let r=x
  const not=concat(" ","not"," ")
  r=replace(r,"!",not)
  r=delimit(r," ")
  const puncts="()[]{}<>+-*%=,;"
  for(const v of puncts)
  {
   r=delimit(r,v)
  }
  r=delimit(r,"...")
  r=keywords(r)
  r=join(r," ")
  return r
 }
 function keywords(x)
 {
  check(is_arr,x)
  let r=x
  r=replace(r,"let","var")
  r=replace(r,"const","let")
  r=replace(r,"function","fn")
  r=replace(r,"return","ret")
  r=replace(r,"continue","cont")
  r=replace(r,"break","brk")
  return r
 }
 if(contain(x,"\""))
  return deep(x)
 return shallow(x)
}
function drop(x)
{
 check(is_arr,x)
 pop(x)
}
function dup(x)
{
 check(is_container,x)
 if(is_arr(x))
  return slice(x,0)
 if(is_obj(x))
 {
  const r=obj()
  for(const k in x)
  {
   const v=get(x,k)
   put(r,k,v)
  }
  return r
 }
 stop()
}
function eq(x,y)
{
 check(is_def,x)
 check(is_def,y)
 const n=compare(x,y)
 return same(n,0)
}
function explode(x)
{
 check(is_str,x)
 return Array.from(x)
}
function from_json(x)
{
 check(is_str,x)
 return JSON.parse(x)
}
function get_values(x)
{
 check(is_obj,x)
 return Object.values(x)
}
function has(x,y)
{
 check(is_def,x)
 check(is_str,y)
 return y in x
}
function inc(x)
{
 check(is_num,x)
 return add(x,1)
}
function indent(x)
{
 check(is_str,x)
 const a=arr()
 for(const v of split(x))
 {
  let s=trim_r(v)
  if(is_empty(s))
   push(a,s)
  else
  {
   s=concat(" ",s)
   push(a,s)
  }
 }
 return join(a)
}
function*init_browser()
{
 let ready=false
 function*script_decompile(x)
 {
  check(is_obj,x)
  for(const k in x)
  {
   const v=get(x,k)
   yield*script_define(k,v)
  }
 }
 function get_urls(x)
 {
  check(is_str,x)
  const r=arr()
  for(const v of dbg_backtrace())
  {
   const url=v.url
   if(same(x,url))
    continue
   if(contain(r,url))
    continue
   push(r,url)
  }
  return r
 }
 function on_ready_state_change()
 {
  if(same(document.readyState,"complete"))
   ready=true
 }
 function on_browser_error(x,y,z,a,b)
 {
  check(is_str,x)
  check(is_obj,b)
  on_browser_report(b)
  window.onerror=null
  return true
 }
 function on_browser_reject(x)
 {
  check(is_obj,x)
  const error=new Error("reject")
  on_browser_report(error,x.reason)
  window.onunhandledrejection=null
  return true
 }
 function on_browser_report(x,y)
 {
  check(is_obj,x)
  if(is_undef(y))
  {
   const o=obj()
   return on_browser_report(x,o)
  }
  check(is_obj,y)
  const error=x
  const reason=y
  const message=error.message
  const agent=get_user_agent()
  const url=to_str(location)
  const origin1=dbg_origin(error)
  const origin=tbl_render(origin1)
  const stack1=dbg_callstack(error)
  tbl_align_r(stack1,"fn")
  const stack=tbl_render(stack1)
  const definition=concat(screen.width,"x",screen.height)
  const signature=navigator.userAgent
  const raw_stack=trim_r(error.stack)
  const compile=time_hn(compile_time)
  const context={error,reason,message,agent,url,origin,stack,definition,signature,raw_stack,compile}
  gn_run(error_process,on_die,context)
 }
 function on_decompile_end()
 {
  global.decompiler=null
 }
 function on_die()
 {
  global.alive=false
 }
 document.onreadystatechange=on_ready_state_change
 while(!ready)
 {
  yield
 }
 const device=get_device()
 if(same(device,"mobile"))
  global.mobile=true
 else
  global.mobile=false
 global.body=document.body
 global.spacing=from_mw("0.9mw")
 const dom=document.scripts.item(0)
 const url=to_str(location)
 const content=dom_html(dom)
 const urls=get_urls(url)
 const sources=obj()
 put(sources,url,content)
 for(const v of urls)
 {
  const s=yield*fetch_url(v)
  put(sources,v,s)
 }
 decompiler=gn_run(script_decompile,on_decompile_end,sources)
 window.onerror=on_browser_error
 window.onunhandledrejection=on_browser_reject
}
function init_node()
{
 function on_node_error(x,y)
 {
  check(is_obj,x)
  check(is_str,y)
  on_node_report(x,y)
 }
 function on_node_reject(x,y)
 {
  check(is_obj,x)
  check(is_def,y)
  log("promise",y)
  on_node_report(x,"reject")
 }
 function on_node_report(x,y)
 {
  check(is_obj,x)
  check(is_str,y)
  const error=x
  const kind=to_lit(y)
  const message=to_lit(error.message)
  log("kind",kind)
  log("message",message)
  dbg_log(error)
  on_die()
  process.exit(2)
 }
 function on_decompile_end()
 {
  global.decompiler=null
 }
 function on_die()
 {
  global.alive=false
 }
 const script=argv_script()
 const code=file_read(script)
 decompiler=gn_run(script_define,on_decompile_end,script,code)
 process.on("uncaughtExceptionMonitor",on_node_error)
 process.on("unhandledRejection",on_node_reject)
}
function*init_platform(...x)
{
 global.nbsp=chr(160)
 global.scripts=obj()
 global.decompiler=null
 if(is_node())
  init_node()
 else if(is_browser())
  yield*init_browser()
 else
  stop()
 if(is_fn(main))
 {
  main(...x)
  decompile_stop()
 }
 else if(is_gn(main))
  yield*main(...x)
 else
  stop()
}
function insert(x,y,z)
{
 check(is_arr,x)
 check(is_uint,y)
 check(is_def,z)
 check(lte,y,x.length)
 const n=inc(y)
 x.splice(n,0,z)
}
function is_access(x)
{
 if(!is_str(x))
  return false
 if(is_empty(x))
  return false
 const a=split(x,".")
 if(is_single(a))
  return false
 return every(a,is_identifier)
}
function is_comment(x)
{
 if(!is_str(x))
  return false
 if(!is_ln(x))
  return false
 const comment=repeat("/",2)
 return match_l(x,comment)
}
function is_composite(x)
{
 if(is_str(x))
  return true
 if(is_arr(x))
  return true
 if(is_obj(x))
  return true
 return false
}
function is_container(x)
{
 if(is_arr(x))
  return true
 if(is_obj(x))
  return true
 return false
}
function is_cool(x)
{
 if(is_num(x))
  return true
 if(is_str(x))
  return true
 return false
}
function is_dot_file(x)
{
 if(!is_str(x))
  return false
 const base=path_base(x)
 return match_l(base,".")
}
function is_fragment(x)
{
 if(is_alnum(x))
  return true
 if(is_space(x))
  return true
 return false
}
function is_lit(x)
{
 if(!is_str(x))
  return false
 if(is_empty(x))
  return false
 const s=trim(x)
 if(different(s,x))
  return false
 let v=null
 try
 {
  v=from_json(s)
 }
 catch
 {
 }
 return is_str(v)
}
function is_ln(x)
{
 if(!is_str(x))
  return false
 return!is_txt(x)
}
function is_many(x)
{
 if(!is_vec(x))
  return false
 return gt(x.length,1)
}
function is_name(x)
{
 if(is_identifier(x))
  return true
 if(is_access(x))
  return true
 return false
}
function is_numeric(x)
{
 if(!is_str(x))
  return false
 if(is_empty(x))
  return false
 const s=trim(x)
 if(different(s,x))
  return false
 let v=null
 try
 {
  v=from_json(s)
 }
 catch
 {
 }
 return is_num(v)
}
function is_pair(x)
{
 if(!is_vec(x))
  return false
 return same(x.length,2)
}
function is_parened(x)
{
 if(!is_str(x))
  return false
 if(!match_l(x,"("))
  return false
 if(!match_r(x,")"))
  return false
 return true
}
function is_punct(x)
{
 if(!is_str(x))
  return false
 if(is_empty(x))
  return false
 for(const v of x)
 {
  if(!contain(puncts,v))
   return false
 }
 return true
}
function is_single(x)
{
 if(!is_vec(x))
  return false
 return same(x.length,1)
}
function is_space(x)
{
 if(!is_str(x))
  return false
 if(is_empty(x))
  return false
 const s=trim(x)
 return is_empty(s)
}
function is_token(x)
{
 if(is_alnum(x))
  return true
 if(is_access(x))
  return true
 if(is_tuple(x))
  return true
 if(is_numeric(x))
  return true
 if(is_lit(x))
  return true
 if(is_comment(x))
  return true
 return false
}
function is_trivia(x)
{
 if(!is_str(x))
  return false
 if(is_space(x))
  return true
 if(is_comment(x))
  return true
 return false
}
function is_tuple(x)
{
 if(!is_str(x))
  return false
 if(is_empty(x))
  return false
 const a=split(x,":")
 if(is_single(a))
  return false
 return every(a,is_identifier)
}
function is_txt(x)
{
 if(!is_str(x))
  return false
 return contain(x,"\n")
}
function map(x,y)
{
 check(is_arr,x)
 check(is_fn,y)
 const r=arr()
 for(const v of x)
 {
  const value=y(v)
  check(is_def,value)
  push(r,value)
 }
 return r
}
function match_r(x,y)
{
 check(is_str,x)
 check(is_str,y)
 if(is_empty(x))
  return false
 if(is_empty(y))
  return false
 return x.endsWith(y)
}
function neq(x,y)
{
 check(is_def,x)
 check(is_def,y)
 const n=compare(x,y)
 return different(n,0)
}
function obj()
{
 return{}
}
function pad_l(x,y,z)
{
 check(is_cool,x)
 if(is_uint(x))
 {
  const s=to_str(x)
  if(is_undef(y))
  {
   if(is_undef(z))
    return pad_l(s,"0",3)
   return pad_l(s,"0",z)
  }
  return pad_l(s,y,z)
 }
 check(is_str,x)
 check(is_str,y)
 check(is_uint,z)
 return x.padStart(z,y)
}
function pad_r(x,y,z)
{
 check(is_cool,x)
 if(is_uint(x))
 {
  const s=to_str(x)
  if(is_undef(y))
  {
   if(is_undef(z))
    return pad_r(s,"0",3)
   return pad_r(s,"0",z)
  }
  return pad_r(s,y,z)
 }
 check(is_str,x)
 check(is_str,y)
 check(is_uint,z)
 return x.padEnd(z,y)
}
function paren(x)
{
 check(is_str,x)
 return concat("(",x,")")
}
function parse(x)
{
 check(is_str,x)
 function inline(x)
 {
  check(is_str,x)
  const s=trim_l(x)
  const indent=sub(x.length,s.length)
  const parameters=recognize(x)
  if(is_empty(parameters))
   return null
  let operator=front(parameters)
  if(is_name(operator))
   shift(parameters)
  else
   operator="data"
  return{indent,operator,parameters}
 }
 function fold(x)
 {
  check(is_arr,x)
  const parent=shift(x)
  const indent=parent.indent
  const descendants=arr()
  while(is_full(x))
  {
   const o=front(x)
   if(gt(o.indent,indent))
   {
    shift(x)
    push(descendants,o)
   }
   else
    break
  }
  const children=arr()
  while(is_full(descendants))
  {
   const o=fold(descendants)
   push(children,o)
  }
  const operator=parent.operator
  const parameters=parent.parameters
  return{operator,parameters,children}
 }
 function simplify(x)
 {
  check(is_arr,x)
  const r=arr()
  for(const v of x)
  {
   const operator=v.operator
   let skip=false
   if(same(operator,"begin"))
    skip=true
   else if(same(operator,"end"))
    skip=true
   if(is_full(v.children))
    skip=false
   if(skip)
    continue
   const parameters=v.parameters
   const children=simplify(v.children)
   const o={operator,parameters,children}
   push(r,o)
  }
  return r
 }
 const lines=arr()
 for(const v of split(x))
 {
  const o=inline(v)
  if(!is_null(o))
   push(lines,o)
 }
 const nodes=arr()
 while(is_full(lines))
 {
  const o=fold(lines)
  push(nodes,o)
 }
 return simplify(nodes)
}
function path_ext(x)
{
 check(is_str,x)
 if(is_dot_file(x))
  return""
 const base=path_base(x)
 const a=split(base,".")
 if(is_single(a))
  return""
 return back(a)
}
function pop(x,y)
{
 check(is_arr,x)
 if(is_undef(y))
  return x.pop()
 check(is_uint,y)
 const r=slice_r(x,y)
 const n=sub(x.length,y)
 remove(x,n,y)
 return r
}
function put(x,y,z)
{
 check(is_def,x)
 check(is_str,y)
 check(is_def,z)
 if(has(x,y))
  stop()
 x[y]=z
}
function recognize(x)
{
 check(is_str,x)
 function deep(x)
 {
  check(is_str,x)
  let r=x
  r=scan(r)
  r=reject(r,is_trivia)
  return r
 }
 function shallow(x)
 {
  check(is_str,x)
  return tokenize(x)
 }
 if(contain(x,"\""))
  return deep(x)
 const comment=repeat("/",2)
 if(contain(x,comment))
  return deep(x)
 return shallow(x)
}
function reject(x,y)
{
 check(is_arr,x)
 check(is_fn,y)
 const r=arr()
 for(const v of x)
 {
  const b=y(v)
  if(is_true(b))
   continue
  check(is_false,b)
  push(r,v)
 }
 return r
}
function repeat(x,y)
{
 check(is_str,x)
 check(is_uint,y)
 return x.repeat(y)
}
function scan(x,y)
{
 check(is_str,x)
 if(is_undef(y))
  return scan(x,is_token)
 check(is_fn,y)
 const fn=y
 function delimit(x)
 {
  check(is_str,x)
  const r=arr()
  for(const v of x)
  {
   if(is_empty(r))
   {
    push(r,v)
    continue
   }
   const left=back(r)
   const right=v
   const fragment=concat(left,right)
   if(is_fragment(fragment))
   {
    drop(r)
    push(r,fragment)
   }
   else
    push(r,right)
  }
  return r
 }
 function group(x)
 {
  check(is_arr,x)
  const r=arr()
  const a=dup(x)
  while(is_full(a))
  {
   const b=reduce(a)
   if(is_full(b))
   {
    const s=join(b,"")
    push(r,s)
    shift(a,b.length)
   }
   else
   {
    const s=shift(a)
    push(r,s)
   }
  }
  return r
 }
 function reduce(x)
 {
  check(is_arr,x)
  check(is_full,x)
  const r=dup(x)
  while(is_full(r))
  {
   const s=join(r,"")
   const b=fn(s)
   if(is_true(b))
    break
   check(is_false,b)
   drop(r)
  }
  return r
 }
 const r=arr()
 let a=x
 a=str_normalize(a)
 a=split(a)
 a=map(a,delimit)
 a=map(a,group)
 for(const k in a)
 {
  const i=to_i(k)
  const v=at(a,i)
  const last=dec(a.length)
  append(r,v)
  if(different(i,last))
   push(r,"\n")
 }
 return r
}
function*script_define(x,y)
{
 check(is_str,x)
 check(is_str,y)
 const inputs=split(y)
 const outputs=arr()
 for(const k in inputs)
 {
  const i=to_i(k)
  const v=at(inputs,i)
  const output=decompile(v)
  push(outputs,output)
  yield
 }
 put(scripts,x,outputs)
}
function set(x,y,z)
{
 check(is_def,x)
 check(is_str,y)
 check(is_def,z)
 x[y]=z
}
function shift(x,y)
{
 check(is_arr,x)
 if(is_undef(y))
  return x.shift()
 check(is_uint,y)
 const r=slice_l(x,y)
 remove(x,0,y)
 return r
}
function space(...x)
{
 return join(x," ")
}
function str_normalize(x)
{
 check(is_str,x)
 function normalize(x)
 {
  check(is_str,x)
  let r=replace(x,nbsp," ")
  if(contain(r,"\r\n"))
   r=replace(r,"\r\n","\n")
  else if(contain(r,"\r"))
   r=replace(r,"\r","\n")
  return r
 }
 let r=x
 r=normalize(r)
 r=split(r)
 r=map(r,trim_r)
 r=join(r)
 r=trim_r(r)
 return r
}
function strip_l(x,y)
{
 check(is_str,x)
 check(is_str,y)
 if(match_l(x,y))
 {
  const n=sub(x.length,y.length)
  return slice_r(x,n)
 }
 return x
}
function strip_r(x,y)
{
 check(is_str,x)
 check(is_str,y)
 if(match_r(x,y))
 {
  const n=sub(x.length,y.length)
  return slice_l(x,n)
 }
 return x
}
function tbl_align_l(x,y)
{
 check(is_arr,x)
 check(is_str,y)
 const width=tbl_column_width(x,y)
 for(const v of x)
 {
  let s=v
  s=get(s,y)
  s=to_cell(s)
  s=pad_r(s," ",width)
  set(v,y,s)
 }
}
function tbl_align_r(x,y)
{
 check(is_arr,x)
 check(is_str,y)
 const width=tbl_column_width(x,y)
 for(const v of x)
 {
  let s=v
  s=get(s,y)
  s=to_cell(s)
  s=pad_l(s," ",width)
  set(v,y,s)
 }
}
function tbl_column_numeric(x,y)
{
 check(is_arr,x)
 check(is_str,y)
 if(is_empty(x))
  return false
 for(const v of x)
 {
  const s=get(v,y)
  if(!is_num(s))
   return false
 }
 return true
}
function tbl_column_width(x,y)
{
 check(is_arr,x)
 check(is_str,y)
 let r=y.length
 for(const v of x)
 {
  let s=v
  s=get(s,y)
  s=to_cell(s)
  r=max(r,s.length)
 }
 return r
}
function tbl_column(x,y)
{
 check(is_arr,x)
 check(is_str,y)
 const r=arr()
 for(const v of x)
 {
  const s=get(v,y)
  push(r,s)
 }
 return r
}
function tbl_columns(x)
{
 check(is_arr,x)
 if(is_empty(x))
  return arr()
 const first=front(x)
 return get_keys(first)
}
function tbl_render(x)
{
 check(is_arr,x)
 function is_column_align_r(x)
 {
  check(is_arr,x)
  if(is_empty(x))
   return false
  const first=front(x)
  const n=first.length
  for(const v of x)
  {
   if(different(v.length,n))
    return false
  }
  for(const v of x)
  {
   const c=front(v)
   if(is_space(c))
    return true
  }
  return false
 }
 const tbl=clone(x)
 const labels=tbl_columns(tbl)
 const header=obj()
 const columns=arr()
 for(const v of labels)
 {
  put(header,v,v)
 }
 unshift(tbl,header)
 for(const v of labels)
 {
  if(tbl_column_numeric(x,v))
   tbl_align_r(tbl,v)
  else
   tbl_align_l(tbl,v)
  const column=tbl_column(tbl,v)
  if(is_column_align_r(column))
  {
   const title1=shift(column)
   const n=title1.length
   const title2=trim(title1)
   const title3=pad_l(title2," ",n)
   unshift(column,title3)
  }
  push(columns,column)
 }
 const lines=arr()
 let width=0
 for(const k in front(columns))
 {
  const i=to_i(k)
  const row=arr()
  const i1=i
  for(const k in labels)
  {
   const i=to_i(k)
   const column=at(columns,i)
   const cell=at(column,i1)
   push(row,cell)
  }
  let line=row
  line=join(line," ")
  line=trim_r(line)
  width=max(width,line.length)
  push(lines,line)
 }
 const separator=repeat("-",width)
 unshift(lines,separator)
 insert(lines,1,separator)
 push(lines,separator)
 return join(lines)
}
function timer_clear(x)
{
 check(is_uint,x)
 clearTimeout(x)
}
function timer_timeout(x,y,...z)
{
 check(is_fn,x)
 check(is_num,y)
 check(gte,y,0)
 check(alive)
 const delay=mul(y,1000)
 return setTimeout(x,delay,...z)
}
function to_bsize(x)
{
 check(is_uint,x)
 check(gte,x,0)
 const kb=1024
 const mb=mul(1024,kb)
 const gb=mul(1024,mb)
 const tb=mul(1024,gb)
 if(lt(x,kb))
 {
  const s=to_fixed(x)
  return concat(s,"b")
 }
 if(lt(x,mb))
 {
  const n=div(x,kb)
  const s=to_fixed(n)
  return concat(s,"Kb")
 }
 if(lt(x,gb))
 {
  const n=div(x,mb)
  const s=to_fixed(n)
  return concat(s,"Mb")
 }
 if(lt(x,tb))
 {
  const n=div(x,gb)
  const s=to_fixed(n)
  return concat(s,"Gb")
 }
 const n=div(x,tb)
 const s=to_fixed(n)
 return concat(s,"Tb")
}
function to_cell(x)
{
 check(is_def,x)
 let r=x
 r=to_str(r)
 r=split(r)
 r=front(r)
 r=trim_r(r)
 return r
}
function to_fixed(x,y)
{
 check(is_num,x)
 if(is_undef(y))
  return to_fixed(x,2)
 check(is_uint,y)
 let s=y
 s=x.toFixed(y)
 let a=s
 a=split(s,".")
 if(is_single(a))
  return s
 const integer=front(a)
 const float=back(a)
 a=explode(float)
 while(is_full(a))
 {
  const c=back(a)
  if(different(c,"0"))
   break
  pop(a)
 }
 if(is_empty(a))
  return integer
 s=implode(a)
 return concat(integer,".",s)
}
function to_i(x)
{
 return Number.parseInt(x)
}
function to_int(x)
{
 check(is_str,x)
 const r=Number.parseInt(x)
 check(is_num,r)
 return r
}
function to_uint(x)
{
 check(is_str,x)
 const r=to_int(x)
 check(gte,r,0)
 return r
}
function trim_l(x)
{
 check(is_str,x)
 return x.trimLeft()
}
function trim(x)
{
 check(is_str,x)
 let r=x
 r=trim_l(r)
 r=trim_r(r)
 return r
}
function trunc(x)
{
 check(is_num,x)
 return Math.trunc(x)
}
function uncomment(x)
{
 check(is_str,x)
 const output=arr()
 for(const v of split(x))
 {
  const s1=trim_r(v)
  if(is_empty(s1))
   continue
  const s2=trim_l(s1)
  const indent=sub(s1.length,s2.length)
  const tokens=recognize(s2)
  if(is_empty(tokens))
   continue
  const s3=collate(tokens)
  const s4=repeat(" ",indent)
  const s5=concat(s4,s3)
  push(output,s5)
 }
 return join(output)
}
function unparen(x)
{
 check(is_str,x)
 if(is_parened(x))
 {
  const n=sub(x.length,2)
  return slice(x,1,n)
 }
 return x
}
function untrivia(x)
{
 check(is_str,x)
 const output=arr()
 for(const v of split(x))
 {
  const s1=trim_r(v)
  if(is_empty(s1))
   continue
  const tokens=recognize(s1)
  if(is_empty(tokens))
   continue
  const s2=join(tokens," ")
  push(output,s2)
 }
 return join(output)
}
function unwrap(x)
{
 check(is_str,x)
 if(is_lit(x))
  return from_json(x)
 if(is_access(x))
  return split(x,".")
 if(is_tuple(x))
  return split(x,":")
 stop()
}
function html_add(x,y)
{
 check(is_obj,x)
 check(is_obj,y)
 const o=clone(y)
 push(x.children,o)
}
function html_attribute(x,y,z)
{
 check(is_obj,x)
 check(is_str,y)
 const attributes=x.attributes
 if(is_undef(z))
  return get(attributes,y)
 check(is_str,z)
 set(attributes,y,z)
}
function html_init(x)
{
 check(is_str,x)
 check(is_str,x)
 const tag=x
 const attributes=obj()
 const styles=obj()
 const children=arr()
 const text=""
 return{tag,attributes,styles,children,text}
}
function html_render(x)
{
 check(is_obj,x)
 function encode_entities(x)
 {
  check(is_str,x)
  let r=x
  r=replace(r,"<","\u003c")
  r=replace(r,">","\u003e")
  return r
 }
 function is_short(x)
 {
  if(!is_obj(x))
   return false
  if(same(x.tag,"meta"))
   return true
  return false
 }
 const tag=x.tag
 const attributes=clone(x.attributes)
 const styles=x.styles
 const children=x.children
 const text=encode_entities(x.text)
 const pattributes=arr()
 const pstyles=arr()
 for(const k in styles)
 {
  const v=get(styles,k)
  const s=to_str(v)
  const pair=concat(k,":",s)
  push(pstyles,pair)
 }
 if(is_full(pstyles))
  attributes.style=join(pstyles,";")
 for(const k in attributes)
 {
  const v=get(attributes,k)
  const s=to_lit(v)
  const pair=concat(k,"=",s)
  push(pattributes,pair)
 }
 let open=pattributes
 open=join(open," ")
 open=concat(tag," ",open)
 open=trim_r(open)
 open=angle(open)
 if(is_short(x))
 {
  check(is_empty,text)
  check(is_empty,children)
  return open
 }
 let close=tag
 close=concat("/",close)
 close=angle(close)
 let inner=children
 inner=map(inner,html_render)
 inner=implode(inner)
 const r=concat(open,inner,text,close)
 if(same(tag,"html"))
 {
  const doctype="<!doctype html>"
  return concat(doctype,r)
 }
 return r
}
function html_reset(x)
{
 check(is_obj,x)
 x.attributes=obj()
 x.styles=obj()
 x.children=arr()
 x.text=""
}
function html_style(x,y,z)
{
 check(is_obj,x)
 check(is_str,y)
 const styles=x.styles
 if(is_undef(z))
  return get(styles,y)
 check(is_str,z)
 set(styles,y,z)
}
function html_text(x,y)
{
 check(is_obj,x)
 if(is_undef(y))
  return x.text
 check(is_str,y)
 x.text=y
}
function and(x,y,...z)
{
 const _=x&&y
 {
  const r=_
  {
   if(is_empty(z))
   {
    return r
   }
   return add(c,...z)
  }
 }
}
function asc(x)
{
 check(is_char,x)
 return x.charCodeAt(0)
}
function base36_decode(x)
{
 check(is_str,x)
 const _=mod(x.length,4)
 {
  const n=_
  {
   check(same,n,0)
   const _=explode(x)
   {
    const input=_
    {
     const _=[]
     {
      const output=_
      {
       while(is_full(input))
       {
        const _=[]
        {
         const b=_
         {
          for(let i=0;i<4;i++)
          {
           const _=shift(input)
           {
            const s=_
            {
             if(same(s,"0"))
             {
              if(is_empty(b))
              {
               continue
              }
             }
             push(b,s)
            }
           }
          }
          if(is_empty(b))
          {
           push(b,"0")
          }
          const _=implode(b)
          {
           const s=_
           {
            const _=from_base36(s)
            {
             const n=_
             {
              const _=chr(n)
              {
               const c=_
               {
                push(output,c)
               }
              }
             }
            }
           }
          }
         }
        }
       }
       return implode(output)
      }
     }
    }
   }
  }
 }
}
function base36_encode(x)
{
 check(is_str,x)
 const _=[]
 {
  const a=_
  {
   for(let i=0;i<x.length;i++)
   {
    const _=at(x,i)
    {
     const v=_
     {
      const _=asc(v)
      {
       const n=_
       {
        const _=to_base36(n)
        {
         const s=_
         {
          const _=pad_l(s,"0",4)
          {
           const s=_
           {
            push(a,s)
           }
          }
         }
        }
       }
      }
     }
    }
   }
   return implode(a)
  }
 }
}
function base36_salt(x,y)
{
 check(is_str,x)
 check(is_str,y)
 const _=salt(x,y)
 {
  const r=_
  {
   const _=base36_encode(r)
   {
    const r=_
    {
     return r
    }
   }
  }
 }
}
function base36_unsalt(x,y)
{
 check(is_str,x)
 check(is_str,y)
 const _=base36_decode(x)
 {
  const r=_
  {
   const _=salt(r,y)
   {
    const r=_
    {
     return r
    }
   }
  }
 }
}
function beep()
{
 const _=os_execute("which","play")
 {
  const play=_
  {
   if(is_full(play))
   {
    os_detach(play,"-n","synth",0.1,"sine",880,"vol",0.5)
   }
  }
 }
}
function crc(x)
{
 check(is_str,x)
 const _=0
 {
  let r=_
  {
   for(const k in x)
   {
    const _=to_i(k)
    {
     const i=_
     {
      const _=at(x,i)
      {
       const v=_
       {
        const _=asc(v)
        {
         const n=_
         {
          r=mul(r,i)
          r=add(r,n)
         }
        }
       }
      }
     }
    }
   }
   return r
  }
 }
}
function dump(x)
{
 if(is_str(x))
 {
  const _=to_json(x)
  {
   const s=_
   {
    log(s)
   }
  }
 }
 else
 {
  log(x)
 }
}
function* fetch_url(x)
{
 if(is_str(x))
 {
  const _=x
  {
   const url=_
   {
    const _={url}
    {
     const o=_
     {
      return yield* fetch_url(o)
     }
    }
   }
  }
 }
 check(is_obj,x)
 const _=null
 {
  let result=_
  {
   function on_response(x)
   {
    check(is_obj,x)
    return x.text()
   }
   function on_data(x)
   {
    check(is_str,x)
    result=x
   }
   const _=8
   {
    const timeout=_
    {
     const _=x.url
     {
      const url=_
      {
       const _=null
       {
        let headers=_
        {
         const _=get(x,"method","get")
         {
          let method=_
          {
           const _=null
           {
            let body=_
            {
             if(has(x,"headers"))
             {
              headers=x.headers
             }
             if(has(x,"body"))
             {
              body=x.body
             }
             const _={}
             {
              const option=_
              {
               option.method=method
               if(!is_null(headers))
               {
                option.headers=headers
               }
               if(!is_null(body))
               {
                option.body=to_json(body)
               }
               const _=fetch(url,option)
               {
                const promise=_
                {
                 const _=promise.then(on_response)
                 {
                  const promise=_
                  {
                   promise.then(on_data)
                   const _=time_now()
                   {
                    const begin=_
                    {
                     while(is_null(result))
                     {
                      const _=time_now()
                      {
                       const end=_
                       {
                        const _=sub(end,begin)
                        {
                         const time=_
                         {
                          if(gt(time,timeout))
                          {
                           stop()
                          }
                          yield
                         }
                        }
                       }
                      }
                     }
                     if(is_json(result))
                     {
                      return from_json(result)
                     }
                     return result
                    }
                   }
                  }
                 }
                }
               }
              }
             }
            }
           }
          }
         }
        }
       }
      }
     }
    }
   }
  }
 }
}
function file_copy(x,y)
{
 check(is_str,x)
 check(is_str,y)
 if(is_dir(y))
 {
  const _=path_base(x)
  {
   const base=_
   {
    const _=path_concat(y,base)
    {
     const path=_
     {
      return file_copy(x,path)
     }
    }
   }
  }
 }
 fs.copyFileSync(x,y)
}
function file_unlink(x)
{
 check(is_str,x)
 fs.unlinkSync(x)
}
function flatten(x)
{
 check(is_container,x)
 const _={}
 {
  const r=_
  {
   const _=clone(x)
   {
    const o=_
    {
     for(const k in o)
     {
      const _=get(o,k)
      {
       const v=_
       {
        const _=to_str(k)
        {
         const key=_
         {
          if(is_container(v))
          {
           const _=flatten(v)
           {
            const o=_
            {
             for(const k in o)
             {
              const _=get(o,k)
              {
               const v=_
               {
                const _=concat(key,".",k)
                {
                 const key=_
                 {
                  put(r,key,v)
                 }
                }
               }
              }
             }
            }
           }
          }
          else
          {
           put(r,key,v)
          }
         }
        }
       }
      }
     }
     return r
    }
   }
  }
 }
}
function flower(x)
{
 check(is_str,x)
 const _=repeat("*",2)
 {
  const left=_
  {
   const _=concat(" ",x," ")
   {
    const middle=_
    {
     const _=repeat("*",terminal_width)
     {
      const right=_
      {
       const _=concat(left,middle,right)
       {
        const s=_
        {
         const _=slice_l(s,terminal_width)
         {
          const s=_
          {
           log(s)
          }
         }
        }
       }
      }
     }
    }
   }
  }
 }
}
function from_base36(x)
{
 check(is_str,x)
 const _=Number.parseInt(x,36)
 {
  const r=_
  {
   check(is_int,r)
   const _=to_base36(r)
   {
    const s=_
    {
     check(same,s,x)
     return r
    }
   }
  }
 }
}
function fs_copy(x,y)
{
 check(is_str,x)
 check(is_str,y)
 const _=true
 {
  const force=_
  {
   const _=true
   {
    const recursive=_
    {
     const _={force,recursive}
     {
      const option=_
      {
       fs.cpSync(x,y,option)
      }
     }
    }
   }
  }
 }
}
function get_length(x)
{
 check(is_composite,x)
 if(is_vec(x))
 {
  return x.length
 }
 if(is_obj(x))
 {
  const _=get_keys(x)
  {
   const a=_
   {
    return get_length(a)
   }
  }
 }
 stop()
}
function gn_forward(x,...y)
{
 check(is_gn,x)
 const _=x
 {
  const gn=_
  {
   const _=y
   {
    const parameters=_
    {
     function r()
     {
      gn_run(gn,nop,...parameters)
     }
     return r
    }
   }
  }
 }
}
function* gn_sleep(x)
{
 if(is_undef(x))
 {
  return yield* gn_sleep(1)
 }
 check(is_num,x)
 const _=time_now()
 {
  const begin=_
  {
   while(true)
   {
    const _=time_now()
    {
     const now=_
     {
      const _=sub(now,begin)
      {
       const delay=_
       {
        if(gte(delay,x))
        {
         break
        }
        yield
       }
      }
     }
    }
   }
  }
 }
}
function iif(x,y,z)
{
 check(is_bool,x)
 check(is_def,y)
 check(is_def,z)
 if(x)
 {
  return y
 }
 return z
}
function is_char(x)
{
 if(!is_str(x))
 {
  return false
 }
 return is_single(x)
}
function is_date(x)
{
 if(!is_str(x))
 {
  return false
 }
 const _=time_parse(x)
 {
  const n=_
  {
   return is_num(n)
  }
 }
}
function is_domain(x)
{
 if(!is_str(x))
 {
  return false
 }
 const _=split(x,".")
 {
  const a=_
  {
   if(is_single(a))
   {
    return false
   }
   for(const v of a)
   {
    if(is_lisp(v))
    {
     continue
    }
    if(is_alnum(v))
    {
     continue
    }
    return false
   }
   return true
  }
 }
}
function is_json(x)
{
 if(!is_str(x))
 {
  return false
 }
 try
 {
  from_json(x)
 }
 catch
 {
  return false
 }
 return true
}
function is_lisp(x)
{
 if(!is_str(x))
 {
  return false
 }
 if(is_empty(x))
 {
  return false
 }
 const _=split(x,"-")
 {
  const a=_
  {
   if(is_single(a))
   {
    return false
   }
   for(const v of a)
   {
    if(!is_alnum(v))
    {
     return false
    }
   }
   return true
  }
 }
}
function is_lower(x)
{
 if(!is_str(x))
 {
  return false
 }
 if(is_empty(x))
 {
  return false
 }
 const _=to_lower(x)
 {
  const s=_
  {
   return same(s,x)
  }
 }
}
function is_mail(x)
{
 function is_component(x)
 {
  if(!is_str(x))
  {
   return false
  }
  if(is_empty(x))
  {
   return false
  }
  for(const v of delimit(x,"."))
  {
   if(is_alnum(v))
   {
   }
   else if(is_lisp(v))
   {
   }
   else
   {
    return false
   }
  }
  return true
 }
 if(!is_str(x))
 {
  return false
 }
 const _=split(x,"@")
 {
  const a=_
  {
   if(different(a.length,2))
   {
    return false
   }
   for(const v of a)
   {
    if(!is_component(v))
    {
     return false
    }
   }
   return true
  }
 }
}
function is_nullable(x)
{
 if(is_null(x))
 {
  return true
 }
 if(is_obj(x))
 {
  return true
 }
 return false
}
function is_readable(x)
{
 if(is_file(x))
 {
  const _=null
  {
   let fd=_
   {
    try
    {
     fd=fs.openSync(x)
    }
    catch
    {
     return false
    }
    const _=file_size(x)
    {
     const n=_
     {
      if(gt(n,0))
      {
       const _=Buffer.alloc(1)
       {
        const buffer=_
        {
         try
         {
          fs.readSync(fd,buffer)
         }
         catch
         {
          fs.closeSync(fd)
          return false
         }
        }
       }
      }
      fs.closeSync(fd)
      return true
     }
    }
   }
  }
 }
 else if(is_dir(x))
 {
  try
  {
   fs.readdirSync(x)
  }
  catch
  {
   return false
  }
  return true
 }
 else
 {
  return false
 }
}
function is_rvalue(x)
{
 if(is_identifier(x))
 {
  return true
 }
 if(is_access(x))
 {
  return true
 }
 if(is_tuple(x))
 {
  return true
 }
 if(is_numeric(x))
 {
  return true
 }
 if(is_lit(x))
 {
  return true
 }
 return false
}
function is_snake(x)
{
 if(!is_str(x))
 {
  return false
 }
 if(is_empty(x))
 {
  return false
 }
 if(is_lower(x))
 {
  return false
 }
 if(is_upper(x))
 {
  return false
 }
 return true
}
function is_upper(x)
{
 if(!is_str(x))
 {
  return false
 }
 if(is_empty(x))
 {
  return false
 }
 const _=to_upper(x)
 {
  const s=_
  {
   return same(s,x)
  }
 }
}
function is_url(x)
{
 if(!is_str(x))
 {
  return false
 }
 if(match_l(x,"http://"))
 {
  return true
 }
 if(match_l(x,"https://"))
 {
  return true
 }
 return false
}
function match(x,y)
{
 check(is_str,x)
 check(is_str,y)
 const _=[]
 {
  const a=_
  {
   for(const v of y)
   {
    if(is_alnum(v))
    {
     push(a,v)
    }
    else if(same(v,"?"))
    {
     push(a,"(.)")
    }
    else if(same(v,"*"))
    {
     push(a,"(.*)")
    }
    else
    {
     const _=concat("\\",v)
     {
      const s=_
      {
       push(a,s)
      }
     }
    }
   }
   const _=implode(a)
   {
    const s=_
    {
     const _=concat("^",s,"$")
     {
      const pattern=_
      {
       const _=new RegExp(pattern)
       {
        const o=_
        {
         return o.test(x)
        }
       }
      }
     }
    }
   }
  }
 }
}
function merge(x,y)
{
 check(is_obj,x)
 check(is_obj,y)
 for(const k in y)
 {
  const _=get(y,k)
  {
   const v=_
   {
    set(x,k,v)
   }
  }
 }
}
function mod(x,y,...z)
{
 check(different,y,0)
 const _=x%y
 {
  const n=_
  {
   if(is_empty(z))
   {
    return n
   }
   return mod(n,...z)
  }
 }
}
function obj_sort(x,y)
{
 check(is_obj,x)
 if(is_undef(y))
 {
  return obj_sort(x,compare)
 }
 check(is_fn,y)
 const _={}
 {
  const r=_
  {
   const _=[]
   {
    const a=_
    {
     for(const k in x)
     {
      const _=k
      {
       const key=_
       {
        const _=get(x,k)
        {
         const value=_
         {
          const _={key,value}
          {
           const o=_
           {
            push(a,o)
           }
          }
         }
        }
       }
      }
     }
     sort(a,y)
     for(const v of a)
     {
      const _=v.key
      {
       const key=_
       {
        const _=v.value
        {
         const value=_
         {
          put(r,key,value)
         }
        }
       }
      }
     }
     return r
    }
   }
  }
 }
}
function or(x,y,...z)
{
 const _=x||y
 {
  const r=_
  {
   if(is_empty(z))
   {
    return r
   }
   return or(c,...z)
  }
 }
}
function os_detach(x,...y)
{
 check(is_str,x)
 const _=true
 {
  const detached=_
  {
   const _="ignore"
   {
    const stdio=_
    {
     const _={detached,stdio}
     {
      const option=_
      {
       const _=cp.spawn(x,y,option)
       {
        const o=_
        {
         o.unref()
        }
       }
      }
     }
    }
   }
  }
 }
}
function os_execute(x,...y)
{
 check(is_str,x)
 const _=true
 {
  const shell=_
  {
   const _=mul(1,1024,1024,1024)
   {
    const maxBuffer=_
    {
     const _="utf8"
     {
      const encoding=_
      {
       const _={shell,maxBuffer,encoding}
       {
        const option=_
        {
         const _=cp.spawnSync(x,y,option)
         {
          const streams=_
          {
           const _=to_str(streams.stdout)
           {
            const out=_
            {
             const _=to_str(streams.stderr)
             {
              const err=_
              {
               const _=concat(out,"\n",err)
               {
                const r=_
                {
                 const _=trim_r(r)
                 {
                  const r=_
                  {
                   return r
                  }
                 }
                }
               }
              }
             }
            }
           }
          }
         }
        }
       }
      }
     }
    }
   }
  }
 }
}
function partial(x,...y)
{
 check(is_fn,x)
 const _=x
 {
  const fn=_
  {
   const _=y
   {
    const parameters=_
    {
     function r(...x)
     {
      return fn(...parameters,...x)
     }
     return r
    }
   }
  }
 }
}
function path_drop(x)
{
 check(is_str,x)
 const _=path_split(x)
 {
  const a=_
  {
   drop(a)
   return path_join(a)
  }
 }
}
function path_fix(x)
{
 check(is_str,x)
 if(!match_r(x,"/"))
 {
  return concat(x,"/")
 }
 return x
}
function path_join(x)
{
 check(is_arr,x)
 return join(x,"/")
}
function rand(x)
{
 check(is_uint,x)
 const _=Math.random()
 {
  const r=_
  {
   const _=mul(r,x)
   {
    const r=_
    {
     const _=trunc(r)
     {
      const r=_
      {
       return r
      }
     }
    }
   }
  }
 }
}
function range(x)
{
 check(is_uint,x)
 const _=[]
 {
  const r=_
  {
   for(let i=0;i<x;i++)
   {
    push(r,i)
   }
   return r
  }
 }
}
function replace_rec(x,y,z)
{
 check(is_vec,x)
 check(is_vec,y)
 check(is_vec,z)
 const _=x
 {
  let r=_
  {
   while(contain(r,y))
   {
    r=replace(r,y,z)
   }
   return r
  }
 }
}
function reverse(x)
{
 check(is_container,x)
 if(is_arr(x))
 {
  x.reverse()
  return x
 }
 if(is_obj(x))
 {
  const _={}
  {
   const r=_
   {
    const _=get_keys(x)
    {
     const keys=_
     {
      reverse(keys)
      for(const v of keys)
      {
       const _=get(x,v)
       {
        const value=_
        {
         put(r,v,value)
        }
       }
      }
      return r
     }
    }
   }
  }
 }
 stop()
}
function salt(x,y)
{
 check(is_str,x)
 check(is_str,y)
 check(is_full,y)
 const _=[]
 {
  const a=_
  {
   for(const k in explode(x))
   {
    const _=to_i(k)
    {
     const i=_
     {
      const _=at(x,i)
      {
       const v=_
       {
        const _=asc(v)
        {
         const n=_
         {
          const _=mod(i,y.length)
          {
           const i=_
           {
            const _=at(y,i)
            {
             const v=_
             {
              const _=asc(v)
              {
               const c=_
               {
                const _=xor(n,c)
                {
                 const n=_
                 {
                  const _=chr(n)
                  {
                   const c=_
                   {
                    push(a,c)
                   }
                  }
                 }
                }
               }
              }
             }
            }
           }
          }
         }
        }
       }
      }
     }
    }
   }
   return implode(a)
  }
 }
}
function shuffle(x)
{
 check(is_arr,x)
 const _=[]
 {
  const r=_
  {
   const _=dup(x)
   {
    const a=_
    {
     while(is_full(a))
     {
      const _=rand(a.length)
      {
       const n=_
       {
        const _=at(a,n)
        {
         const v=_
         {
          remove(a,n)
          push(r,v)
         }
        }
       }
      }
     }
     return r
    }
   }
  }
 }
}
function sleep(x)
{
 if(is_undef(x))
 {
  return sleep(1)
 }
 check(is_num,x)
 check(gte,x,0)
 os_system("sleep",x)
}
function tbl_column_remove(x,y)
{
 check(is_arr,x)
 check(is_str,y)
 for(const k in x)
 {
  const _=to_i(k)
  {
   const i=_
   {
    const _=at(x,i)
    {
     const v=_
     {
      const _=unset(v,y)
      {
       const o=_
       {
        at(x,i,o)
       }
      }
     }
    }
   }
  }
 }
}
function tbl_filter(x,y,z)
{
 check(is_arr,x)
 check(is_str,y)
 check(is_fn,z)
 const _=[]
 {
  const r=_
  {
   for(const v of x)
   {
    const _=get(v,y)
    {
     const value=_
     {
      const _=z(value)
      {
       const b=_
       {
        if(is_true(b))
        {
         push(r,v)
        }
        else
        {
         check(is_false,b)
        }
       }
      }
     }
    }
   }
   return r
  }
 }
}
function tbl_import_wsl(x,y)
{
 check(is_arr,x)
 check(is_str,y)
 clear(x)
 const _=trim_r(y)
 {
  const s=_
  {
   const _=split(s)
   {
    const lines=_
    {
     const _=shift(lines)
     {
      const header=_
      {
       const _=[]
       {
        const columns=_
        {
         const _=[]
         {
          const widths=_
          {
           for(const v of split(header," "))
           {
            if(is_empty(v))
            {
             const _=back(widths)
             {
              let width=_
              {
               width=inc(width)
               back(widths,0,width)
              }
             }
            }
            else
            {
             const _=inc(v.length)
             {
              const width=_
              {
               push(columns,v)
               push(widths,width)
              }
             }
            }
           }
           for(const v of lines)
           {
            const _=0
            {
             let n=_
             {
              const _=trim(v)
              {
               const line=_
               {
                const _={}
                {
                 const o=_
                 {
                  for(const k in columns)
                  {
                   const _=to_i(k)
                   {
                    const i=_
                    {
                     const _=dec(columns.length)
                     {
                      const last=_
                      {
                       const _=at(columns,i)
                       {
                        const column=_
                        {
                         const _=at(widths,i)
                         {
                          const width=_
                          {
                           const _=line
                           {
                            let s=_
                            {
                             if(same(i,last))
                             {
                              s=slice(s,n)
                             }
                             else
                             {
                              s=slice(line,n,width)
                             }
                             const _=trim_r(s)
                             {
                              const s=_
                              {
                               put(o,column,s)
                               n=add(n,width)
                              }
                             }
                            }
                           }
                          }
                         }
                        }
                       }
                      }
                     }
                    }
                   }
                  }
                  push(x,o)
                 }
                }
               }
              }
             }
            }
           }
          }
         }
        }
       }
      }
     }
    }
   }
  }
 }
}
function tbl_init(x)
{
 if(is_undef(x))
 {
  const _=[]
  {
   const r=_
   {
    return r
   }
  }
 }
 function convert_arr(x)
 {
  check(is_arr,x)
  const _=[]
  {
   const r=_
   {
    for(const k in x)
    {
     const _=to_i(k)
     {
      const i=_
      {
       const _=at(x,i)
       {
        const v=_
        {
         const _=i
         {
          const key=_
          {
           const _=v
           {
            const value=_
            {
             const _={key,value}
             {
              const o=_
              {
               push(r,o)
              }
             }
            }
           }
          }
         }
        }
       }
      }
     }
    }
    return r
   }
  }
 }
 function convert_obj(x)
 {
  check(is_obj,x)
  const _=[]
  {
   const r=_
   {
    for(const k in x)
    {
     const _=get(x,k)
     {
      const v=_
      {
       const _=k
       {
        const key=_
        {
         const _=v
         {
          const value=_
          {
           if(is_txt(value))
           {
            const _=split(value)
            {
             const lines=_
             {
              for(const v of lines)
              {
               const _=v
               {
                const value=_
                {
                 const _={key,value}
                 {
                  const o=_
                  {
                   push(r,o)
                  }
                 }
                }
               }
              }
             }
            }
           }
           else
           {
            const _={key,value}
            {
             const o=_
             {
              push(r,o)
             }
            }
           }
          }
         }
        }
       }
      }
     }
    }
    return r
   }
  }
 }
 if(is_arr(x))
 {
  return convert_arr(x)
 }
 if(is_obj(x))
 {
  return convert_obj(x)
 }
 stop()
}
function tbl_parse(x,y)
{
 check(is_arr,x)
 check(is_str,y)
 function to_column(x)
 {
  check(is_str,x)
  const _=[]
  {
   const a=_
   {
    for(const v of to_lower(x))
    {
     if(is_alnum(v))
     {
      push(a,v)
     }
     else
     {
      push(a," ")
     }
    }
    const _=implode(a)
    {
     const r=_
     {
      const _=replace_rec(r,"  "," ")
      {
       const r=_
       {
        const _=trim(r)
        {
         const r=_
         {
          const _=replace(r," ","-")
          {
           const r=_
           {
            return r
           }
          }
         }
        }
       }
      }
     }
    }
   }
  }
 }
 clear(x)
 const _=split(y)
 {
  const lines=_
  {
   const _=shift(lines)
   {
    const header=_
    {
     const _=split(header," ")
     {
      const columns=_
      {
       const _=reject(columns,is_empty)
       {
        const columns=_
        {
         const _=map(columns,to_column)
         {
          const columns=_
          {
           for(const v of lines)
           {
            const _=split(v," ")
            {
             const cells=_
             {
              const _=reject(cells,is_empty)
              {
               const cells=_
               {
                while(gt(cells.length,columns.length))
                {
                 const _=pop(cells)
                 {
                  const s1=_
                  {
                   const _=pop(cells)
                   {
                    const s2=_
                    {
                     const _=space(s2,s1)
                     {
                      const s3=_
                      {
                       push(cells,s3)
                      }
                     }
                    }
                   }
                  }
                 }
                }
                const _=zip(columns,cells)
                {
                 const o=_
                 {
                  push(x,o)
                 }
                }
               }
              }
             }
            }
           }
          }
         }
        }
       }
      }
     }
    }
   }
  }
 }
}
function tbl_rename(x,y,z)
{
 check(is_arr,x)
 check(is_str,y)
 check(is_str,z)
 for(const k in x)
 {
  const _=to_i(k)
  {
   const i=_
   {
    const _=at(x,i)
    {
     const row=_
     {
      const _={}
      {
       const o=_
       {
        for(const k in row)
        {
         const _=get(row,k)
         {
          const value=_
          {
           if(same(k,y))
           {
            put(o,z,value)
           }
           else
           {
            put(o,k,value)
           }
          }
         }
        }
        at(x,i,o)
       }
      }
     }
    }
   }
  }
 }
}
function tbl_with_order(x)
{
 check(is_arr,x)
 const _=[]
 {
  const r=_
  {
   for(const k in x)
   {
    const _=to_i(k)
    {
     const i=_
     {
      const _=at(x,i)
      {
       const v=_
       {
        const _=inc(i)
        {
         const n=_
         {
          const _={}
          {
           const o=_
           {
            o.order=n
            dup(o,v)
            push(r,o)
           }
          }
         }
        }
       }
      }
     }
    }
   }
   return r
  }
 }
}
function time_hn(x)
{
 check(is_int,x)
 function get_unit(x)
 {
  check(is_num,x)
  const _=60
  {
   const minute=_
   {
    const _=mul(60,minute)
    {
     const hour=_
     {
      const _=mul(24,hour)
      {
       const day=_
       {
        const _=mul(30,day)
        {
         const month=_
         {
          const _=mul(12,month)
          {
           const year=_
           {
            if(lt(x,10))
            {
             const _=to_fixed(x)
             {
              const n=_
              {
               return concat(n,"s")
              }
             }
            }
            if(lt(x,minute))
            {
             const _=trunc(x)
             {
              const n=_
              {
               return concat(n,"s")
              }
             }
            }
            if(lt(x,hour))
            {
             const _=div(x,minute)
             {
              const n=_
              {
               const _=trunc(n)
               {
                const n=_
                {
                 return concat(n,"m")
                }
               }
              }
             }
            }
            if(lt(x,day))
            {
             const _=div(x,hour)
             {
              const n=_
              {
               const _=trunc(n)
               {
                const n=_
                {
                 return concat(n,"h")
                }
               }
              }
             }
            }
            if(lt(x,month))
            {
             const _=div(x,day)
             {
              const n=_
              {
               const _=trunc(n)
               {
                const n=_
                {
                 return concat(n,"d")
                }
               }
              }
             }
            }
            if(lt(x,year))
            {
             const _=div(x,month)
             {
              const n=_
              {
               const _=trunc(n)
               {
                const n=_
                {
                 return concat(n,"m")
                }
               }
              }
             }
            }
            const _=div(x,year)
            {
             const n=_
             {
              const _=trunc(n)
              {
               const n=_
               {
                return concat(n,"y")
               }
              }
             }
            }
           }
          }
         }
        }
       }
      }
     }
    }
   }
  }
 }
 const _=time_get()
 {
  const now=_
  {
   if(same(x,now))
   {
    return "now"
   }
   if(gt(x,now))
   {
    const _=sub(x,now)
    {
     const n=_
     {
      const _=get_unit(n)
      {
       const s=_
       {
        return concat("in ",s)
       }
      }
     }
    }
   }
   const _=sub(now,x)
   {
    const n=_
    {
     const _=get_unit(n)
     {
      const s=_
      {
       return concat(s," ago")
      }
     }
    }
   }
  }
 }
}
function time_locale(x)
{
 check(is_uint,x)
 const _=new Date
 {
  const d=_
  {
   const _=mul(x,1000)
   {
    const n=_
    {
     d.setTime(n)
     return d.toLocaleString()
    }
   }
  }
 }
}
function time_parse(x)
{
 check(is_str,x)
 function parse_year(x)
 {
  check(is_str,x)
  if(!is_numeric(x))
  {
   return false
  }
  const _=to_uint(x)
  {
   const n=_
   {
    const _=new Date
    {
     const d=_
     {
      d.setUTCFullYear(n)
      d.setUTCMonth(0)
      d.setUTCDate(1)
      d.setUTCHours(0,0,0,0)
      return d.getTime
     }
    }
   }
  }
 }
 function parse_date(x,y)
 {
  check(is_str,x)
  check(is_str,y)
  const _=split(x,y)
  {
   const a=_
   {
    if(different(a.length,3))
    {
     return false
    }
    if(!every(a,is_digit))
    {
     return false
    }
    const _=shift(a)
    {
     const day=_
     {
      const _=to_uint(day)
      {
       let day=_
       {
        const _=shift(a)
        {
         const month=_
         {
          const _=to_uint(month)
          {
           const month=_
           {
            const _=dec(month)
            {
             const month=_
             {
              const _=shift(a)
              {
               const year=_
               {
                const _=to_uint(year)
                {
                 let year=_
                 {
                  if(gt(day,31))
                  {
                   const _=day
                   {
                    const n=_
                    {
                     day=year
                     year=n
                    }
                   }
                  }
                  check(lte,day,31)
                  check(lte,month,11)
                  const _=new Date
                  {
                   const d=_
                   {
                    d.setUTCFullYear(year)
                    d.setUTCMonth(month)
                    d.setUTCDate(day)
                    d.setUTCHours(0,0,0,0)
                    const _=d.getTime()
                    {
                     const r=_
                     {
                      if(!is_num(r))
                      {
                       return r
                      }
                      const _=div(r,1000)
                      {
                       const r=_
                       {
                        return r
                       }
                      }
                     }
                    }
                   }
                  }
                 }
                }
               }
              }
             }
            }
           }
          }
         }
        }
       }
      }
     }
    }
   }
  }
 }
 function parse_date_time(x,y)
 {
  check(is_str,x)
  check(is_str,y)
  const _=delimit(x,y)
  {
   const a=_
   {
    const _=delimit(a,":")
    {
     const a=_
     {
      const _=delimit(a," ")
      {
       const a=_
       {
        if(different(a.length,5))
        {
         return false
        }
        if(!every(a,is_digit))
        {
         return false
        }
        const _=shift(a)
        {
         const day=_
         {
          const _=to_uint(day)
          {
           let day=_
           {
            const _=shift(a)
            {
             const month=_
             {
              const _=to_uint(month)
              {
               const month=_
               {
                const _=dec(month)
                {
                 const month=_
                 {
                  const _=shift(a)
                  {
                   const year=_
                   {
                    const _=to_uint(year)
                    {
                     let year=_
                     {
                      if(gt(day,31))
                      {
                       const _=day
                       {
                        const n=_
                        {
                         day=year
                         year=n
                        }
                       }
                      }
                      check(lte,day,31)
                      check(lte,month,11)
                      const _=shift(a)
                      {
                       const hour=_
                       {
                        const _=to_uint(hour)
                        {
                         const hour=_
                         {
                          const _=shift(a)
                          {
                           const minute=_
                           {
                            const _=to_uint(minute)
                            {
                             const minute=_
                             {
                              check(lte,hour,24)
                              check(lte,minute,60)
                              const _=new Date
                              {
                               const d=_
                               {
                                d.setUTCFullYear(year)
                                d.setUTCMonth(month)
                                d.setUTCDate(day)
                                d.setUTCHours(hour,minute,0,0)
                                const _=d.getTime()
                                {
                                 const r=_
                                 {
                                  if(!is_num(r))
                                  {
                                   return r
                                  }
                                  const _=div(r,1000)
                                  {
                                   const r=_
                                   {
                                    return r
                                   }
                                  }
                                 }
                                }
                               }
                              }
                             }
                            }
                           }
                          }
                         }
                        }
                       }
                      }
                     }
                    }
                   }
                  }
                 }
                }
               }
              }
             }
            }
           }
          }
         }
        }
       }
      }
     }
    }
   }
  }
 }
 const _=parse_year(x)
 {
  const n=_
  {
   if(is_num(n))
   {
    return n
   }
   const _=parse_date(x,"/")
   {
    const n=_
    {
     if(is_num(n))
     {
      return n
     }
     const _=parse_date(x,"-")
     {
      const n=_
      {
       if(is_num(n))
       {
        return n
       }
       const _=parse_date_time(x,"/")
       {
        const n=_
        {
         if(is_num(n))
         {
          return n
         }
         const _=parse_date_time(x,"-")
         {
          const n=_
          {
           if(is_num(n))
           {
            return n
           }
           const _=Date.parse(x)
           {
            const n=_
            {
             if(is_num(n))
             {
              return div(n,1000)
             }
             return false
            }
           }
          }
         }
        }
       }
      }
     }
    }
   }
  }
 }
}
function time_string(x)
{
 check(is_num,x)
 const _=new Date
 {
  const d=_
  {
   const _=mul(x,1000)
   {
    const n=_
    {
     d.setTime(n)
     const _=d.getUTCFullYear()
     {
      const year=_
      {
       const _=d.getUTCMonth()
       {
        const month=_
        {
         const _=inc(month)
         {
          const month=_
          {
           const _=d.getUTCDate()
           {
            const day=_
            {
             const _=d.getUTCHours()
             {
              const hour=_
              {
               const _=d.getUTCMinutes()
               {
                const minute=_
                {
                 const _="date-time"
                 {
                  let format=_
                  {
                   if(same(hour,0))
                   {
                    if(same(minute,0))
                    {
                     format="date"
                     if(same(month,1))
                     {
                      if(same(day,1))
                      {
                       format="year"
                      }
                     }
                    }
                   }
                   const _=pad_l(month,"0",2)
                   {
                    const month=_
                    {
                     const _=pad_l(day,"0",2)
                     {
                      const day=_
                      {
                       const _=pad_l(hour,"0",2)
                       {
                        const hour=_
                        {
                         const _=pad_l(minute,"0",2)
                         {
                          const minute=_
                          {
                           if(same(format,"date-time"))
                           {
                            const _=concat(year,"/",month,"/",day)
                            {
                             const r=_
                             {
                              const _=concat(r," ",hour,":",minute)
                              {
                               const r=_
                               {
                                return r
                               }
                              }
                             }
                            }
                           }
                           else if(same(format,"date"))
                           {
                            return concat(year,"/",month,"/",day)
                           }
                           else if(same(format,"year"))
                           {
                            return to_str(year)
                           }
                           else
                           {
                            stop()
                           }
                          }
                         }
                        }
                       }
                      }
                     }
                    }
                   }
                  }
                 }
                }
               }
              }
             }
            }
           }
          }
         }
        }
       }
      }
     }
    }
   }
  }
 }
}
function to_arr(x)
{
 check(is_def,x)
 const _=[]
 {
  const r=_
  {
   const _=x.length
   {
    const length=_
    {
     check(is_uint,length)
     for(const v of x)
     {
      push(r,v)
     }
     return r
    }
   }
  }
 }
}
function to_base36(x)
{
 check(is_cool,x)
 if(is_uint(x))
 {
  return x.toString(36)
 }
 else if(is_str(x))
 {
  const _=""
  {
   let r=_
   {
    for(const v of x)
    {
     if(is_single(v))
     {
      const _=asc(v)
      {
       const n=_
       {
        const _=to_base36(n)
        {
         const s=_
         {
          r=concat(r,s)
         }
        }
       }
      }
     }
     else if(is_pair(v))
     {
      const _=v.charCodeAt(0)
      {
       const n1=_
       {
        const _=v.charCodeAt(1)
        {
         const n2=_
         {
          const _=to_base36(n1)
          {
           const s1=_
           {
            const _=to_base36(n2)
            {
             const s2=_
             {
              r=concat(r,s1,s2)
             }
            }
           }
          }
         }
        }
       }
      }
     }
     else
     {
      stop()
     }
    }
    return r
   }
  }
 }
 else
 {
  stop()
 }
}
function to_dump(x)
{
 check(is_def,x)
 return JSON.stringify(x,null,1)
}
function to_flat(x)
{
 check(is_arr,x)
 const _=[]
 {
  const r=_
  {
   for(const v of x)
   {
    push(r,v)
    const _=to_flat(v.children)
    {
     const a=_
     {
      append(r,a)
     }
    }
   }
   return r
  }
 }
}
function to_html(x)
{
 check(is_str,x)
 const _=trim_r(x)
 {
  const s=_
  {
   if(is_empty(s))
   {
    return ""
   }
   const _=split(s)
   {
    const lines=_
    {
     if(same(lines.length,1))
     {
      return s
     }
     const _=[]
     {
      const a=_
      {
       for(const v of lines)
       {
        const _=trim_r(v)
        {
         const s=_
         {
          if(is_empty(s))
          {
           push(a,"<br>")
          }
          else
          {
           const _=concat("<div>",s,"</div>")
           {
            const s=_
            {
             push(a,s)
            }
           }
          }
         }
        }
       }
       return implode(a)
      }
     }
    }
   }
  }
 }
}
function to_lower(x)
{
 check(is_str,x)
 return x.toLowerCase()
}
function to_num(x)
{
 check(is_str,x)
 const _=from_json(x)
 {
  const r=_
  {
   check(is_num,r)
   return r
  }
 }
}
function to_tree(x)
{
 check(is_arr,x)
 function get_children(x,y)
 {
  check(is_obj,x)
  check(is_arr,y)
  const _=[]
  {
   const r=_
   {
    const _=x.id
    {
     const id=_
     {
      for(const v of y)
      {
       if(is_null(v.parent))
       {
        continue
       }
       if(different(v.parent.id,id))
       {
        continue
       }
       const _=get_children(v,y)
       {
        const children=_
        {
         v.children=children
         push(r,v)
        }
       }
      }
      return r
     }
    }
   }
  }
 }
 const _=[]
 {
  const r=_
  {
   for(const v of x)
   {
    if(!is_null(v.parent))
    {
     continue
    }
    const _=get_children(v,x)
    {
     const children=_
     {
      v.children=children
      push(r,v)
     }
    }
   }
   return r
  }
 }
}
function to_upper(x)
{
 check(is_str,x)
 return x.toUpperCase()
}
function txt_excerpt(x,y)
{
 check(is_str,x)
 if(is_undef(y))
 {
  return txt_excerpt(x,512)
 }
 const _=x
 {
  const r=_
  {
   const _=trim_r(r)
   {
    const r=_
    {
     const _=split(r)
     {
      const r=_
      {
       const _=head(r,4)
       {
        const r=_
        {
         const _=join(r)
         {
          let r=_
          {
           const _=r
           {
            const s=_
            {
             while(gt(r.length,y))
             {
              r=split(r," ")
              pop(r)
              r=join(r," ")
              r=trim_r(r)
             }
             if(is_empty(r))
             {
              r=s
             }
             r=head(r,y)
             if(same(r,x))
             {
              return x
             }
             r=unpunct_r(r)
             if(different(r,x))
             {
              r=concat(r," ...")
             }
             return r
            }
           }
          }
         }
        }
       }
      }
     }
    }
   }
  }
 }
}
function unpunct_r(x)
{
 check(is_str,x)
 const _=x
 {
  let r=_
  {
   while(is_full(r))
   {
    const _=back(r)
    {
     const c=_
     {
      if(!is_punct(c))
      {
       break
      }
      r=strip_r(r,c)
      r=trim_r(r)
     }
    }
   }
   return r
  }
 }
}
function unset(x,y)
{
 check(is_obj,x)
 check(is_str,y)
 const _={}
 {
  const r=_
  {
   for(const k in x)
   {
    const _=get(x,k)
    {
     const v=_
     {
      if(same(k,y))
      {
       continue
      }
      put(r,k,v)
     }
    }
   }
   return r
  }
 }
}
function url_excerpt(x,y)
{
 check(is_str,x)
 if(is_undef(y))
 {
  return url_excerpt(x,128)
 }
 check(is_uint,y)
 const _=x
 {
  const r=_
  {
   const _=strip_l(r,"http://")
   {
    const r=_
    {
     const _=strip_l(r,"https://")
     {
      const r=_
      {
       const _=strip_l(r,"www.")
       {
        const r=_
        {
         const _=unpunct_r(r)
         {
          const r=_
          {
           const _=txt_excerpt(r,y)
           {
            const r=_
            {
             return r
            }
           }
          }
         }
        }
       }
      }
     }
    }
   }
  }
 }
}
function url_parse(x)
{
 check(is_str,x)
 return new URL(x)
}
function* xn_call(x,...y)
{
 check(is_xn,x)
 if(is_fn(x))
 {
  return x(...y)
 }
 else if(is_gn(x))
 {
  return yield* x(...y)
 }
 else
 {
  stop()
 }
}
function xor(x,y,...z)
{
 check(different,y,0)
 const _=x^y
 {
  const n=_
  {
   if(is_empty(z))
   {
    return n
   }
   return xor(n,...z)
  }
 }
}
function zip(x,y)
{
 check(is_arr,x)
 check(is_arr,y)
 check(same,x.length,y.length)
 const _={}
 {
  const r=_
  {
   for(const k in x)
   {
    const _=to_i(k)
    {
     const i=_
     {
      const _=at(x,i)
      {
       const key=_
       {
        const _=at(y,i)
        {
         const value=_
         {
          put(r,key,value)
         }
        }
       }
      }
     }
    }
   }
   return r
  }
 }
}
function* api_report(x,y)
{
 check(is_str,x)
 check(is_def,y)
 if(!is_obj(y))
 {
  const _=y
  {
   const value=_
   {
    const _={value}
    {
     const o=_
     {
      return api_report(x,o)
     }
    }
   }
  }
 }
 check(is_obj,y)
 const _="report"
 {
  const endpoint=_
  {
   const _=concat("https://pimaastore.com/",endpoint,".php")
   {
    const url=_
    {
     const _=flatten(y)
     {
      const payload=_
      {
       const _=tbl_init(payload)
       {
        const tbl=_
        {
         const _=tbl_render(tbl)
         {
          const tbl=_
          {
           log("report",x)
           log(tbl)
           const _=[x,payload]
           {
            const payload=_
            {
             const _=to_json(payload)
             {
              const payload=_
              {
               yield* xhr_post(url,payload)
              }
             }
            }
           }
          }
         }
        }
       }
      }
     }
    }
   }
  }
 }
}
function argv_params()
{
 return new URLSearchParams(location.search)
}
function css_init(x)
{
 if(is_undef(x))
 {
  return css_init("indigo")
 }
 global.thickness=from_mw("0.1mw")
 global.border=concat(thickness," solid gray")
 global.font_family="monospace"
 global.font_size=from_mw("1.4mw")
 global.padding=from_mw("0.4mw")
 global.button=from_mw("9mw")
 global.border=concat(thickness," solid gainsboro")
 global.line=from_mw("1.8mw")
 const _=from_mw("0.4mw")
 {
  const s=_
  {
   global.shadow=concat(s," ",s," ",s," gray")
   if(mobile)
   {
    global.border_radius=from_mw("0.5mw")
    global.border_radius_medium=from_mw("0.4mw")
    global.border_radius_small=from_mw("0.2mw")
    global.field_width=from_mw("19mw")
    global.field_width_medium=from_mw("17mw")
    global.field_width_small=from_mw("8mw")
    global.field_height=from_mw("8mw")
   }
   else
   {
    global.border_radius=from_mw("0.9mw")
    global.border_radius_medium=from_mw("0.7mw")
    global.border_radius_small=from_mw("0.4mw")
    global.field_width=from_mw("33mw")
    global.field_width_medium=from_mw("24mw")
    global.field_width_small=from_mw("13mw")
    global.field_height=from_mw("20mw")
   }
   dom_style_tag(body)
   dom_css("html","text-size-adjust","none")
   dom_css("body","font-family",font_family)
   dom_css("body","font-size",font_size)
   dom_css("h1","font-family",font_family)
   dom_css("h2","font-family",font_family)
   dom_css("h3","font-family",font_family)
   dom_css("h4","font-family",font_family)
   dom_css("h5","font-family",font_family)
   dom_css("h6","font-family",font_family)
   dom_css("h1","font-size",font_size)
   dom_css("h2","font-size",font_size)
   dom_css("h3","font-size",font_size)
   dom_css("h4","font-size",font_size)
   dom_css("h5","font-size",font_size)
   dom_css("h6","font-size",font_size)
   dom_css("h1","padding-bottom",line)
   dom_css("h2","padding-bottom",line)
   dom_css("h3","padding-bottom",line)
   dom_css("h4","padding-bottom",line)
   dom_css("h5","padding-bottom",line)
   dom_css("h6","padding-bottom",line)
   dom_css("h1","margin",0)
   dom_css("h2","margin",0)
   dom_css("h3","margin",0)
   dom_css("h4","margin",0)
   dom_css("h5","margin",0)
   dom_css("h6","margin",0)
   dom_css("ul","margin",0)
   dom_css("br","height",line)
   dom_css("pre","margin",0)
   dom_css("p","margin",0)
   dom_css("p","padding-bottom",line)
   dom_css("td","padding-top",0)
   dom_css("td","padding-bottom",padding)
   dom_css("td","padding-left",0)
   dom_css("td","padding-right",padding)
   dom_css("td","text-align","left")
   dom_css("tr td:last-child","padding-right",0)
   dom_css("table tr:last-child td","padding-bottom",0)
   dom_css("a","text-decoration-line","none")
   dom_css("a","color",x)
   dom_css("a:hover","color","white","background-color",x)
   dom_css("a.image-link","background-color","transparent")
   dom_css("a.image-link","display","block")
   dom_css("a.image-link img","display","block")
   dom_css("button","font-family",font_family)
   dom_css("button","font-size",font_size)
   dom_css("button","padding",padding)
   dom_css("button","width",button)
   dom_css("input","padding",0)
   dom_css("input","font-family",font_family)
   dom_css("input","font-size",font_size)
   dom_css("input","width",field_width)
   dom_css("textarea","padding",0)
   dom_css("textarea","font-family",font_family)
   dom_css("textarea","font-size",font_size)
   dom_css("textarea","width",field_width)
   dom_css("textarea","height",field_height)
   dom_css("select","font-family",font_family)
   dom_css("select","font-size",font_size)
   dom_css("dialog","border",border)
   dom_css("dialog","max-width","80%")
  }
 }
}
function* digest(x)
{
 check(is_str,x)
 const _=null
 {
  let r=_
  {
   function on_data(x)
   {
    check(is_obj,x)
    r=x
   }
   const _=new TextEncoder
   {
    const encoder=_
    {
     const _=encoder.encode(x)
     {
      const data=_
      {
       const _=crypto.subtle.digest("sha-256",data)
       {
        const promise=_
        {
         promise.then(on_data)
         while(is_null(r))
         {
          yield
         }
         const _=new TextDecoder
         {
          const decoder=_
          {
           const _=decoder.decode(r)
           {
            const r=_
            {
             const _=to_base36(r)
             {
              const r=_
              {
               return r
              }
             }
            }
           }
          }
         }
        }
       }
      }
     }
    }
   }
  }
 }
}
function* dlg_alert(x,y)
{
 check(is_str,x)
 if(is_undef(y))
 {
  return yield* dlg_alert(x,"OK")
 }
 function on_click(x)
 {
  check(is_obj,x)
  x.close()
 }
 const _=dlg_init(x)
 {
  const dlg=_
  {
   dom_bold_no(dlg.title)
   const _=dlg_button(dlg,y)
   {
    const button=_
    {
     const _=partial(on_click,dlg.dialog)
     {
      const on_click=_
      {
       dlg.dialog.onenter=on_click
       button.onclick=on_click
       yield* dlg_modal(dlg)
      }
     }
    }
   }
  }
 }
}
function dlg_button(x,y)
{
 check(is_obj,x)
 check(is_str,y)
 const _=x.container
 {
  const container=_
  {
   const _=x.buttons
   {
    const buttons=_
    {
     const _=null
     {
      let parent=_
      {
       if(is_empty(buttons))
       {
        if(is_full(x.fields))
        {
         dom_br(container)
        }
        parent=dom_div(container)
       }
       else
       {
        const _=back(buttons)
        {
         const button=_
         {
          parent=dom_parent(button)
          dom_spacer(parent)
         }
        }
       }
       const _=dom_button(parent)
       {
        const r=_
        {
         dom_text(r,y)
         push(buttons,r)
         return r
        }
       }
      }
     }
    }
   }
  }
 }
}
function dlg_close(x)
{
 check(is_obj,x)
 x.dialog.close()
}
function* dlg_confirm(x)
{
 if(is_undef(x))
 {
  return yield* dlg_confirm("Do you confirm your action?")
 }
 check(is_str,x)
 const _=false
 {
  let r=_
  {
   function on_ok(x)
   {
    check(is_obj,x)
    r=true
    x.close()
   }
   function on_cancel(x)
   {
    check(is_obj,x)
    r=false
    x.close()
   }
   const _=dlg_init(x)
   {
    const dlg=_
    {
     dom_bold_no(dlg.title)
     const _=dlg_button(dlg,"OK")
     {
      const ok=_
      {
       const _=dlg_button(dlg,"Cancel")
       {
        const cancel=_
        {
         const _=partial(on_ok,dlg.dialog)
         {
          const on_ok=_
          {
           const _=partial(on_cancel,dlg.dialog)
           {
            const on_cancel=_
            {
             dlg.dialog.onenter=on_ok
             ok.onclick=on_ok
             cancel.onclick=on_cancel
             yield* dlg_modal(dlg)
             return r
            }
           }
          }
         }
        }
       }
      }
     }
    }
   }
  }
 }
}
function dlg_init(x)
{
 if(is_undef(x))
 {
  return dlg_init("")
 }
 check(is_str,x)
 const _=dom_dialog(body)
 {
  const dialog=_
  {
   const _=dom_div(dialog,x)
   {
    const title=_
    {
     dom_align(dialog,"center")
     dom_bold(title)
     dom_br(dialog)
     const _=dom_div(dialog)
     {
      const container=_
      {
       dom_display(container,"inline-block")
       const _=[]
       {
        const fields=_
        {
         const _=[]
         {
          const buttons=_
          {
           return {dialog,title,container,fields,buttons}
          }
         }
        }
       }
      }
     }
    }
   }
  }
 }
}
function dlg_loading(x)
{
 if(is_undef(x))
 {
  return dlg_loading(10)
 }
 const _=div
 {
  const divide=_
  {
   const _=dom_dialog(body)
   {
    const result=_
    {
     const _=dom_div(result,"Loading...")
     {
      const container=_
      {
       const _=dom_div(result)
       {
        const div2=_
        {
         const _=dom_div(div2)
         {
          const progress=_
          {
           const _=0.4
           {
            const frequency=_
            {
             const _=time_now()
             {
              const begin=_
              {
               dom_height(progress,"1vw")
               dom_padding_top(div2,spacing)
               dom_color_background(progress,"lightgray")
               function on_timer()
               {
                const _=dom_visible(container)
                {
                 const visibity=_
                 {
                  if(is_empty(visibity))
                  {
                   dom_visible(container,"hidden")
                  }
                  else if(same(visibity,"visible"))
                  {
                   dom_visible(container,"hidden")
                  }
                  else if(same(visibity,"hidden"))
                  {
                   dom_visible(container,"visible")
                  }
                  else
                  {
                   stop()
                  }
                  const _=time_now()
                  {
                   const now=_
                   {
                    const _=sub(now,begin)
                    {
                     let delay=_
                     {
                      if(gte(delay,x))
                      {
                       delay=x
                      }
                      const _=div(delay,x)
                      {
                       const ratio=_
                       {
                        const _=mul(div2.offsetWidth,ratio)
                        {
                         const width=_
                         {
                          const _=to_vw(width)
                          {
                           const width=_
                           {
                            dom_width(progress,width)
                            if(result.open)
                            {
                             timer_timeout(on_timer,frequency)
                            }
                           }
                          }
                         }
                        }
                       }
                      }
                     }
                    }
                   }
                  }
                 }
                }
               }
               dom_visible(container,"visible")
               result.show()
               const _=dom_window_height()
               {
                const y=_
                {
                 const _=sub(y,result.offsetHeight)
                 {
                  const y=_
                  {
                   const _=div(y,2)
                   {
                    const y=_
                    {
                     const _=to_vw(y)
                     {
                      const y=_
                      {
                       dom_top(result,y)
                       timer_timeout(on_timer,frequency)
                       return result
                      }
                     }
                    }
                   }
                  }
                 }
                }
               }
              }
             }
            }
           }
          }
         }
        }
       }
      }
     }
    }
   }
  }
 }
}
function* dlg_modal(x)
{
 check(is_obj,x)
 yield* dom_modal(x.dialog)
}
function dlg_push(x,y,z)
{
 check(is_obj,x)
 check(is_str,y)
 if(is_undef(z))
 {
  return dlg_push(x,y,"input")
 }
 check(is_str,z)
 const _=dom_div(x.container)
 {
  const div1=_
  {
   const _=dom_div(x.container)
   {
    const div2=_
    {
     const _=dom_label(div1,y)
     {
      const label=_
      {
       const _=concat("dom_",z)
       {
        const init=_
        {
         const _=eval(init)
         {
          const init=_
          {
           const _=init(div2)
           {
            const r=_
            {
             dom_align(div1,"left")
             if(is_full(x.fields))
             {
              dom_padding_top(div1,spacing)
             }
             push(x.fields,r)
             return r
            }
           }
          }
         }
        }
       }
      }
     }
    }
   }
  }
 }
}
function* error_process(x)
{
 check(is_obj,x)
 const _=x.error
 {
  const error=_
  {
   const _=to_lit(x.message)
   {
    const message=_
    {
     const _=x.agent
     {
      const agent=_
      {
       log("message",message)
       dbg_log(error)
       const _=concat("error ",agent," ",message)
       {
        const subject=_
        {
         if(different(agent,"googlebot"))
         {
          yield* api_report(subject,x)
         }
         yield* error_show(x)
        }
       }
      }
     }
    }
   }
  }
 }
}
function* error_show(x)
{
 check(is_obj,x)
 function on_click(x)
 {
  check(is_obj,x)
  x.close()
 }
 const _=flatten(x)
 {
  const pairs=_
  {
   const _=dlg_init("An error has occured")
   {
    const dlg=_
    {
     dom_color(dlg.title,"red")
     const _=dom_table(dlg.container)
     {
      const table=_
      {
       for(const k in pairs)
       {
        const _=get(pairs,k)
        {
         const v=_
         {
          const _=dom_tr(table)
          {
           const tr=_
           {
            const _=dom_td(tr)
            {
             const left=_
             {
              const _=dom_td(tr)
              {
               const right=_
               {
                if(!is_str(v))
                {
                 const _=to_json(v)
                 {
                  const s=_
                  {
                   dom_pre(right,s)
                  }
                 }
                }
                else if(is_url(v))
                {
                 const _=url_excerpt(v)
                 {
                  const s=_
                  {
                   dom_a(right,s,v,true)
                  }
                 }
                }
                else
                {
                 dom_pre(right,v)
                }
                dom_padding_left(right,spacing)
                dom_align(left,"right")
                dom_valign(left,"top")
                dom_valign(right,"top")
                dom_text(left,k)
               }
              }
             }
            }
           }
          }
         }
        }
       }
       dom_br(dlg.container)
       const _=dom_div(dlg.container,"This report has been sent to the webmaster.")
       {
        const div=_
        {
         dom_bold(div)
         dom_align(div,"center")
         dom_color(div,"green")
         dom_br(dlg.container)
         const _=dlg_button(dlg,"Continue")
         {
          const continue_=_
          {
           const _=partial(on_click,dlg.dialog)
           {
            const on_click=_
            {
             dlg.dialog.onenter=on_click
             continue_.onclick=on_click
             yield* dlg_modal(dlg)
             location.reload()
            }
           }
          }
         }
        }
       }
      }
     }
    }
   }
  }
 }
}
function form_button(x,y)
{
 check(is_obj,x)
 check(is_str,y)
 return dlg_button(x,y)
}
function form_init(x)
{
 check(is_obj,x)
 const _=dom_div(x)
 {
  const container=_
  {
   const _=[]
   {
    const fields=_
    {
     const _=[]
     {
      const buttons=_
      {
       return {container,fields,buttons}
      }
     }
    }
   }
  }
 }
}
function form_push(x,y,z)
{
 check(is_obj,x)
 check(is_str,y)
 if(is_undef(z))
 {
  return form_push(x,y,"input")
 }
 check(is_str,z)
 const _=dom_div(x.container)
 {
  const div1=_
  {
   const _=dom_div(x.container)
   {
    const div2=_
    {
     const _=dom_label(div1,y)
     {
      const label=_
      {
       const _=concat("dom_",z)
       {
        const init=_
        {
         const _=eval(init)
         {
          const init=_
          {
           const _=init(div2)
           {
            const r=_
            {
             if(mobile)
             {
              dom_bold(label)
             }
             if(is_full(x.fields))
             {
              dom_padding_top(div1,spacing)
             }
             dom_width(r,x.container.offsetWidth)
             push(x.fields,r)
             return r
            }
           }
          }
         }
        }
       }
      }
     }
    }
   }
  }
 }
}
function from_mw(x)
{
 check(is_cool,x)
 if(is_num(x))
 {
  return x
 }
 check(is_str,x)
 if(match_r(x,"mw"))
 {
  const _=strip_r(x,"mw")
  {
   const r=_
   {
    const _=from_json(r)
    {
     const r=_
     {
      if(mobile)
      {
       const _=4
       {
        const zoom=_
        {
         const _=mul(r,zoom)
         {
          const r=_
          {
           const _=concat(r,"vw")
           {
            const r=_
            {
             return r
            }
           }
          }
         }
        }
       }
      }
      else
      {
       const _=concat(r,"vw")
       {
        const r=_
        {
         return r
        }
       }
      }
     }
    }
   }
  }
 }
 else
 {
  return x
 }
}
function from_px(x)
{
 check(is_str,x)
 check(match_r,x,"px")
 const _=strip_r(x,"px")
 {
  const r=_
  {
   const _=from_json(r)
   {
    const r=_
    {
     return r
    }
   }
  }
 }
}
function from_vw(x)
{
 check(is_str,x)
 const _=from_mw(x)
 {
  const r=_
  {
   check(match_r,r,"vw")
   const _=dom_div(body)
   {
    const div=_
    {
     dom_height(div,r)
     const _=div.offsetHeight
     {
      const r=_
      {
       dom_remove(div)
       return r
      }
     }
    }
   }
  }
 }
}
function get_device()
{
 const _=get_user_agent()
 {
  const agent=_
  {
   if(same(agent,"android"))
   {
    return "mobile"
   }
   else if(same(agent,"iphone"))
   {
    return "mobile"
   }
   else
   {
    return "desktop"
   }
  }
 }
}
function get_user_agent()
{
 const _=navigator.userAgent
 {
  const agent=_
  {
   const _=to_lower(agent)
   {
    const agent=_
    {
     if(contain(agent,"googlebot"))
     {
      return "googlebot"
     }
     else if(contain(agent,"android"))
     {
      return "android"
     }
     else if(contain(agent,"iphone"))
     {
      return "iphone"
     }
     else if(contain(agent,"firefox"))
     {
      return "firefox"
     }
     else if(contain(agent,"edge"))
     {
      return "edge"
     }
     else if(contain(agent,"chrome"))
     {
      return "chrome"
     }
     else if(contain(agent,"safari"))
     {
      return "safari"
     }
     else
     {
      return "unknown"
     }
    }
   }
  }
 }
}
function grid_align(x,...y)
{
 check(is_obj,x)
 if(same(y.length,1))
 {
  const _=front(y)
  {
   const y_=_
   {
    const _=y_
    {
     const y=_
     {
      check(is_str,y)
      for(const v of x.columns)
      {
       grid_align(x,v,y)
      }
     }
    }
   }
  }
 }
 else if(same(y.length,2))
 {
  const _=at(y,0)
  {
   const y_=_
   {
    const _=at(y,1)
    {
     const z=_
     {
      const _=y_
      {
       const y=_
       {
        check(is_cool,y)
        check(is_str,z)
        const _=grid_index(x,y)
        {
         const n=_
         {
          for(const v of x.table.children)
          {
           const _=at(v.children,n)
           {
            const td=_
            {
             dom_align(td,z)
            }
           }
          }
         }
        }
       }
      }
     }
    }
   }
  }
 }
 else
 {
  stop()
 }
}
function grid_at(x,y)
{
 check(is_obj,x)
 check(is_uint,y)
 const _={}
 {
  const r=_
  {
   const _=inc(y)
   {
    const n=_
    {
     const _=at(x.table.children,n)
     {
      const tr=_
      {
       const _=x.columns
       {
        const columns=_
        {
         for(const k in columns)
         {
          const _=to_i(k)
          {
           const i=_
           {
            const _=at(columns,i)
            {
             const v=_
             {
              const _=at(tr.children,i)
              {
               const td=_
               {
                put(r,v,td)
               }
              }
             }
            }
           }
          }
         }
         return r
        }
       }
      }
     }
    }
   }
  }
 }
}
function grid_column_width(x,y,z)
{
 check(is_obj,x)
 check(is_cool,y)
 check(is_cool,z)
 const _=grid_index(x,y)
 {
  const n=_
  {
   for(const v of x.table.children)
   {
    const _=at(v.children,n)
    {
     const td=_
     {
      dom_width(td,z)
     }
    }
   }
  }
 }
}
function grid_ellipsis(x,y)
{
 check(is_obj,x)
 if(is_undef(y))
 {
  for(const v of x.columns)
  {
   grid_ellipsis(x,v)
  }
  return
 }
 check(is_str,y)
 const _=from_vw("0.5vw")
 {
  const tweak=_
  {
   const _=from_vw(line)
   {
    const line=_
    {
     const _=add(line,tweak)
     {
      const line=_
      {
       const _=to_vw(line)
       {
        const line=_
        {
         const _=grid_index(x,y)
         {
          const n=_
          {
           for(const v of x.table.children)
           {
            const _=at(v.children,n)
            {
             const td=_
             {
              const _=front(td.children)
              {
               const div=_
               {
                dom_height(div,line)
                dom_overflow(div,"hidden")
                dom_white_space(div,"nowrap")
                dom_text_overflow(div,"ellipsis")
               }
              }
             }
            }
           }
          }
         }
        }
       }
      }
     }
    }
   }
  }
 }
}
function grid_index(x,y)
{
 check(is_obj,x)
 check(is_cool,y)
 const _=x.columns
 {
  const columns=_
  {
   if(is_uint(y))
   {
    check(lt,y,columns.length)
    return y
   }
   else if(is_str(y))
   {
    for(const k in columns)
    {
     const _=to_i(k)
     {
      const i=_
      {
       const _=at(columns,i)
       {
        const v=_
        {
         if(same(v,y))
         {
          return i
         }
        }
       }
      }
     }
    }
    stop()
   }
   else
   {
    stop()
   }
  }
 }
}
function grid_init_sort(x)
{
 check(is_obj,x)
 const _="▲"
 {
  const up=_
  {
   const _="▼"
   {
    const down=_
    {
     const _=x
     {
      const grid=_
      {
       const _=grid.table
       {
        const table=_
        {
         const _=table.children
         {
          const children=_
          {
           const _=grid.headers
           {
            const headers=_
            {
             const _=null
             {
              const column=_
              {
               const _=null
               {
                const order=_
                {
                 const _=[]
                 {
                  const rows=_
                  {
                   grid.sorting={column,order,rows}
                   const _=grid.sorting
                   {
                    const sorting=_
                    {
                     function reset()
                     {
                      for(const k in get_keys(headers))
                      {
                       const _=to_i(k)
                       {
                        const i=_
                        {
                         const _=get_values(headers)
                         {
                          const value=_
                          {
                           const _=at(value,i)
                           {
                            const value=_
                            {
                             const _=at(grid.titles,i)
                             {
                              const title=_
                              {
                               dom_text(value,title)
                              }
                             }
                            }
                           }
                          }
                         }
                        }
                       }
                      }
                      while(gt(children.length,1))
                      {
                       const _=children.item(1)
                       {
                        const tr=_
                        {
                         dom_remove(tr)
                        }
                       }
                      }
                      for(const v of sorting.rows)
                      {
                       dom_push(table,v)
                      }
                     }
                     function save()
                     {
                      const _=sorting.rows
                      {
                       const rows=_
                       {
                        if(is_full(sorting.rows))
                        {
                         return
                        }
                        for(let i=0;i<children.length;i++)
                        {
                         if(same(i,0))
                         {
                          continue
                         }
                         const _=children.item(i)
                         {
                          const row=_
                          {
                           push(rows,row)
                          }
                         }
                        }
                       }
                      }
                     }
                     function compare_node(x,y,z)
                     {
                      check(is_uint,x)
                      check(is_obj,y)
                      check(is_obj,z)
                      const _=y.children.item(x)
                      {
                       const tdy=_
                       {
                        const _=z.children.item(x)
                        {
                         const tdz=_
                         {
                          const _=tdy.children.item(0)
                          {
                           const divy=_
                           {
                            const _=tdz.children.item(0)
                            {
                             const divz=_
                             {
                              const _=dom_text(divy)
                              {
                               let sy=_
                               {
                                const _=dom_text(divz)
                                {
                                 let sz=_
                                 {
                                  if(is_empty(sy))
                                  {
                                   sy=dom_html(divy)
                                  }
                                  if(is_empty(sz))
                                  {
                                   sz=dom_html(divz)
                                  }
                                  const _=to_lower(sy)
                                  {
                                   const sy=_
                                   {
                                    const _=to_lower(sz)
                                    {
                                     const sz=_
                                     {
                                      const _=is_numeric(sy)
                                      {
                                       const numericy=_
                                       {
                                        const _=is_numeric(sz)
                                        {
                                         const numericz=_
                                         {
                                          if(and(numericy,numericz))
                                          {
                                           const _=to_num(sy)
                                           {
                                            const numy=_
                                            {
                                             const _=to_num(sz)
                                             {
                                              const numz=_
                                              {
                                               return compare(numy,numz)
                                              }
                                             }
                                            }
                                           }
                                          }
                                          return compare(sy,sz)
                                         }
                                        }
                                       }
                                      }
                                     }
                                    }
                                   }
                                  }
                                 }
                                }
                               }
                              }
                             }
                            }
                           }
                          }
                         }
                        }
                       }
                      }
                     }
                     function on_click(x)
                     {
                      check(is_str,x)
                      if(is_obj(grid.tooltip))
                      {
                       dom_remove(grid.tooltip)
                       grid.tooltip=null
                      }
                      save()
                      reset()
                      if(is_null(sorting.column))
                      {
                       sorting.column=x
                       sorting.order="descending"
                      }
                      else if(same(sorting.column,x))
                      {
                       if(same(sorting.order,"descending"))
                       {
                        sorting.order="ascending"
                       }
                       else if(same(sorting.order,"ascending"))
                       {
                        sorting.column=null
                        sorting.order=null
                        return
                       }
                       else
                       {
                        stop()
                       }
                      }
                      else
                      {
                       sorting.column=x
                       sorting.order="descending"
                      }
                      const _=get_keys(headers)
                      {
                       const index=_
                       {
                        const _=find(index,x)
                        {
                         const index=_
                         {
                          const _=get(headers,x)
                          {
                           const header=_
                           {
                            const _=at(grid.titles,index)
                            {
                             let title=_
                             {
                              title=concat(title," ")
                              if(same(sorting.order,"descending"))
                              {
                               title=concat(title,down)
                              }
                              else if(same(sorting.order,"ascending"))
                              {
                               title=concat(title,up)
                              }
                              else
                              {
                               stop()
                              }
                              dom_text(header,title)
                              const _=[]
                              {
                               const nodes=_
                               {
                                while(gt(children.length,1))
                                {
                                 const _=children.item(1)
                                 {
                                  const tr=_
                                  {
                                   dom_remove(tr)
                                   push(nodes,tr)
                                  }
                                 }
                                }
                                const _=partial(compare_node,index)
                                {
                                 const compare=_
                                 {
                                  sort(nodes,compare)
                                  if(same(sorting.order,"descending"))
                                  {
                                   reverse(nodes)
                                  }
                                  else if(same(sorting.order,"ascending"))
                                  {
                                  }
                                  else
                                  {
                                   stop()
                                  }
                                  for(const v of nodes)
                                  {
                                   dom_push(table,v)
                                  }
                                 }
                                }
                               }
                              }
                             }
                            }
                           }
                          }
                         }
                        }
                       }
                      }
                     }
                     for(const k in headers)
                     {
                      const _=get(headers,k)
                      {
                       const v=_
                       {
                        dom_over(v,"cursor","pointer")
                        v.onclick=partial(on_click,k)
                       }
                      }
                     }
                    }
                   }
                  }
                 }
                }
               }
              }
             }
            }
           }
          }
         }
        }
       }
      }
     }
    }
   }
  }
 }
}
function grid_init(x,...y)
{
 check(is_obj,x)
 const _=[]
 {
  const columns=_
  {
   const _=y
   {
    const titles=_
    {
     const _=dom_table(x)
     {
      const table=_
      {
       const _=dom_tr(table)
       {
        const tr=_
        {
         const _={}
         {
          const headers=_
          {
           const _=null
           {
            const tooltip=_
            {
             for(const v of y)
             {
              const _=to_lower(v)
              {
               const column=_
               {
                const _=column
                {
                 let key=_
                 {
                  const _=dom_th(tr)
                  {
                   const th=_
                   {
                    const _=dom_div(th,v)
                    {
                     const div=_
                     {
                      if(same(key,"#"))
                      {
                       key="sharp"
                      }
                      push(columns,key)
                      put(headers,key,th)
                      dom_padding(th,padding)
                      dom_border(th,border)
                     }
                    }
                   }
                  }
                 }
                }
               }
              }
             }
             r={columns,titles,table,headers,tooltip}
             grid_init_sort(r)
             return r
            }
           }
          }
         }
        }
       }
      }
     }
    }
   }
  }
 }
}
function grid_push(x)
{
 check(is_obj,x)
 const _=x
 {
  const grid=_
  {
   function on_tr_enter(x)
   {
    check(is_obj,x)
    for(const k in x)
    {
     const _=get(x,k)
     {
      const v=_
      {
       const _=dom_parent(v)
       {
        const td=_
        {
         dom_color_background(td,"whitesmoke")
        }
       }
      }
     }
    }
   }
   function on_tr_leave(x)
   {
    check(is_obj,x)
    for(const k in x)
    {
     const _=get(x,k)
     {
      const v=_
      {
       const _=dom_parent(v)
       {
        const td=_
        {
         dom_style_remove(td,"background-color")
        }
       }
      }
     }
    }
   }
   function on_div_enter(x)
   {
    check(is_obj,x)
    if(!is_null(grid.tooltip))
    {
     dom_remove(grid.tooltip)
    }
    const _=x.on_tooltip
    {
     let html=_
     {
      if(is_null(x.on_tooltip))
      {
       if(dom_overflown(x))
       {
        html=dom_html(x)
       }
       else
       {
        return
       }
      }
      else if(is_fn(html))
      {
       html=html(x)
      }
      if(is_empty(html))
      {
       return
      }
      grid.tooltip=dom_div(null)
      const _=grid.tooltip
      {
       const tooltip=_
       {
        const _=dom_parent(x)
        {
         const td=_
         {
          dom_html(tooltip,html)
          dom_unshift(td,tooltip)
          dom_padding(tooltip,padding)
          dom_shadow(tooltip,shadow)
          const _=front(tooltip.children)
          {
           const div=_
           {
            dom_position(tooltip,"absolute")
            dom_color_background(tooltip,"white")
            dom_border(tooltip,border)
            const _=dom_line_height()
            {
             const vgap=_
             {
              const _=mul(vgap,5)
              {
               const vgap=_
               {
                const _=from_vw("1.3vw")
                {
                 const tweak=_
                 {
                  const _=dom_rect(td)
                  {
                   const rect=_
                   {
                    const _=add(rect.x,scrollX)
                    {
                     const x=_
                     {
                      const _=add(rect.y,scrollY,vgap)
                      {
                       const y=_
                       {
                        const _=tooltip.offsetWidth
                        {
                         const width=_
                         {
                          const _=tooltip.offsetHeight
                          {
                           const height=_
                           {
                            const _=dom_window_width()
                            {
                             const window_width=_
                             {
                              const _=dom_window_height()
                              {
                               const window_height=_
                               {
                                const _=x
                                {
                                 let x=_
                                 {
                                  const _=y
                                  {
                                   let y=_
                                   {
                                    const _=add(x,width)
                                    {
                                     const right=_
                                     {
                                      const _=add(y,height)
                                      {
                                       const bottom=_
                                       {
                                        const _=add(scrollX,window_width)
                                        {
                                         const scroll_right=_
                                         {
                                          const _=sub(scroll_right,tweak)
                                          {
                                           const scroll_right=_
                                           {
                                            const _=add(scrollY,window_height)
                                            {
                                             const scroll_bottom=_
                                             {
                                              const _=sub(scroll_bottom,tweak)
                                              {
                                               const scroll_bottom=_
                                               {
                                                if(gt(right,scroll_right))
                                                {
                                                 x=sub(scroll_right,width)
                                                 if(lt(x,0))
                                                 {
                                                  x=0
                                                 }
                                                }
                                                if(gt(bottom,scroll_bottom))
                                                {
                                                 y=sub(scroll_bottom,height)
                                                 if(lt(y,0))
                                                 {
                                                  y=0
                                                 }
                                                }
                                                if(lt(x,scrollX))
                                                {
                                                 x=scrollX
                                                }
                                                if(lt(y,scrollY))
                                                {
                                                 y=scrollY
                                                }
                                                const _=to_vw(x)
                                                {
                                                 const x=_
                                                 {
                                                  const _=to_vw(y)
                                                  {
                                                   const y=_
                                                   {
                                                    dom_left(tooltip,x)
                                                    dom_top(tooltip,y)
                                                    tooltip.onmouseleave=on_tooltip_leave
                                                   }
                                                  }
                                                 }
                                                }
                                               }
                                              }
                                             }
                                            }
                                           }
                                          }
                                         }
                                        }
                                       }
                                      }
                                     }
                                    }
                                   }
                                  }
                                 }
                                }
                               }
                              }
                             }
                            }
                           }
                          }
                         }
                        }
                       }
                      }
                     }
                    }
                   }
                  }
                 }
                }
               }
              }
             }
            }
           }
          }
         }
        }
       }
      }
     }
    }
   }
   function on_tooltip_leave(x)
   {
    check(is_obj,x)
    dom_remove(grid.tooltip)
    grid.tooltip=null
   }
   const _={}
   {
    const r=_
    {
     const _=dom_tr(x.table)
     {
      const tr=_
      {
       tr.onmouseenter=partial(on_tr_enter,r)
       tr.onmouseleave=partial(on_tr_leave,r)
       for(const v of x.columns)
       {
        const _=dom_td(tr)
        {
         const td=_
         {
          const _=dom_div(td)
          {
           const div=_
           {
            dom_padding(td,padding)
            dom_border(td,border)
            div.onmouseenter=partial(on_div_enter,div)
            div.on_tooltip=null
            put(r,v,div)
           }
          }
         }
        }
       }
       return r
      }
     }
    }
   }
  }
 }
}
function grid_valign(x,...y)
{
 check(is_obj,x)
 if(same(y.length,1))
 {
  const _=front(y)
  {
   const y_=_
   {
    const _=y_
    {
     const y=_
     {
      check(is_str,y)
      for(const v of x.columns)
      {
       grid_valign(x,v,y)
      }
     }
    }
   }
  }
 }
 else if(same(y.length,2))
 {
  const _=at(y,0)
  {
   const y_=_
   {
    const _=at(y,1)
    {
     const z=_
     {
      const _=y_
      {
       const y=_
       {
        check(is_cool,y)
        check(is_str,z)
        const _=grid_index(x,y)
        {
         const n=_
         {
          for(const v of x.table.children)
          {
           const _=at(v.children,n)
           {
            const td=_
            {
             dom_valign(td,z)
            }
           }
          }
         }
        }
       }
      }
     }
    }
   }
  }
 }
 else
 {
  stop()
 }
}
function html_special_chars(x)
{
 check(is_str,x)
 const _=x
 {
  const r=_
  {
   const _=replace(r,"&amp;","&")
   {
    const r=_
    {
     const _=replace(r,"&quot;","\"")
     {
      const r=_
      {
       const _=replace(r,"&apos;","'")
       {
        const r=_
        {
         const _=replace(r,"&lt;","<")
         {
          const r=_
          {
           const _=replace(r,"&gt;",">")
           {
            const r=_
            {
             return r
            }
           }
          }
         }
        }
       }
      }
     }
    }
   }
  }
 }
}
function storage_get(x)
{
 check(is_str,x)
 const _=localStorage.getItem(x)
 {
  const r=_
  {
   if(is_null(r))
   {
    return ""
   }
   return r
  }
 }
}
function storage_keys()
{
 const _=[]
 {
  const r=_
  {
   for(let i=0;i<localStorage.length;i++)
   {
    const _=localStorage.key(i)
    {
     const s=_
     {
      push(r,s)
     }
    }
   }
   return r
  }
 }
}
function storage_remove(x)
{
 check(is_str,x)
 localStorage.removeItem(x)
}
function storage_set(x,y)
{
 check(is_str,x)
 check(is_str,y)
 while(true)
 {
  try
  {
   localStorage.setItem(x,y)
  }
  catch(e)
  {
   const _=storage_keys()
   {
    const keys=_
    {
     if(is_empty(keys))
     {
      throw e
     }
     const _=shuffle(keys)
     {
      const keys=_
      {
       const _=head(keys,32)
       {
        const keys=_
        {
         for(const v of keys)
         {
          storage_remove(v)
         }
         continue
        }
       }
      }
     }
    }
   }
  }
  break
 }
}
function to_px(x)
{
 check(is_num,x)
 const _=trunc(x)
 {
  const r=_
  {
   const _=to_json(r)
   {
    const r=_
    {
     const _=concat(r,"px")
     {
      const r=_
      {
       return r
      }
     }
    }
   }
  }
 }
}
function to_vw(x)
{
 check(is_num,x)
 const _=dom_window_width()
 {
  const r=_
  {
   const _=div(x,r)
   {
    const r=_
    {
     const _=mul(r,100)
     {
      const r=_
      {
       const _=to_fixed(r)
       {
        const r=_
        {
         const _=concat(r,"vw")
         {
          const r=_
          {
           return r
          }
         }
        }
       }
      }
     }
    }
   }
  }
 }
}
function* xhr_load(x)
{
 check(is_str,x)
 const _=null
 {
  let result=_
  {
   const _=8
   {
    const timeout=_
    {
     const _=new XMLHttpRequest
     {
      const xhr=_
      {
       function on_ready_state_change(x)
       {
        if(same(xhr.readyState,xhr.DONE))
        {
         result=xhr.response
        }
       }
       xhr.open("get",x)
       xhr.onreadystatechange=on_ready_state_change
       xhr.send()
       const _=time_now()
       {
        const begin=_
        {
         while(true)
         {
          if(is_str(result))
          {
           break
          }
          const _=time_now()
          {
           const end=_
           {
            const _=sub(end,begin)
            {
             const time=_
             {
              if(gt(time,timeout))
              {
               stop()
              }
              yield
             }
            }
           }
          }
         }
         if(is_json(result))
         {
          return from_json(result)
         }
         return result
        }
       }
      }
     }
    }
   }
  }
 }
}
function* xhr_post(x,y)
{
 check(is_str,x)
 check(is_str,y)
 const _=null
 {
  let result=_
  {
   const _=4
   {
    const timeout=_
    {
     const _=new XMLHttpRequest
     {
      const xhr=_
      {
       function on_ready_state_change(x)
       {
        if(same(xhr.readyState,xhr.DONE))
        {
         result=xhr.response
        }
       }
       xhr.open("post",x)
       xhr.onreadystatechange=on_ready_state_change
       xhr.setRequestHeader("content-type","application/x-www-form-urlencoded")
       const _=encodeURIComponent(y)
       {
        const u=_
        {
         const _=concat("u=",u)
         {
          const u=_
          {
           xhr.send(u)
           const _=time_now()
           {
            const begin=_
            {
             while(true)
             {
              if(is_str(result))
              {
               break
              }
              const _=time_now()
              {
               const end=_
               {
                const _=sub(end,begin)
                {
                 const time=_
                 {
                  if(gt(time,timeout))
                  {
                   stop()
                  }
                  yield
                 }
                }
               }
              }
             }
             return result
            }
           }
          }
         }
        }
       }
      }
     }
    }
   }
  }
 }
}
function dom_a(x,y,z,a)
{
 check(is_nullable,x)
 const _=dom_init("a",x)
 {
  const r=_
  {
   if(is_def(y))
   {
    dom_text(r,y)
   }
   if(is_def(z))
   {
    check(is_str,z)
    r.href=z
   }
   else
   {
    dom_over(r,"cursor","pointer")
   }
   if(is_def(a))
   {
    check(is_bool,a)
    if(a)
    {
     r.target="_blank"
    }
   }
   return r
  }
 }
}
function dom_align(x,y)
{
 check(is_obj,x)
 check(is_str,y)
 x.style.textAlign=y
}
function dom_attr(x,y,z)
{
 check(is_obj,x)
 check(is_str,y)
 if(is_def(z))
 {
  check(is_cool,z)
  x.setAttribute(y,z)
 }
 else
 {
  return x.getAttribute(y)
 }
}
function dom_b(x,y)
{
 check(is_nullable,x)
 const _=dom_init("b",x)
 {
  const r=_
  {
   if(is_def(y))
   {
    dom_text(r,y)
   }
   return r
  }
 }
}
function dom_bold_no(x)
{
 check(is_obj,x)
 dom_font_weight(x,"normal")
}
function dom_bold(x)
{
 check(is_obj,x)
 dom_font_weight(x,"bold")
}
function dom_border_bottom(x,y)
{
 check(is_obj,x)
 check(is_str,y)
 x.style.borderBottom=y
}
function dom_border_left(x,y)
{
 check(is_obj,x)
 check(is_str,y)
 x.style.borderLeft=y
}
function dom_border_radius(x,y)
{
 check(is_obj,x)
 check(is_str,y)
 const _=from_mw(y)
 {
  const s=_
  {
   x.style.borderRadius=s
  }
 }
}
function dom_border_right(x,y)
{
 check(is_obj,x)
 check(is_str,y)
 x.style.borderRight=y
}
function dom_border_top(x,y)
{
 check(is_obj,x)
 check(is_str,y)
 x.style.borderTop=y
}
function dom_border(x,y)
{
 check(is_obj,x)
 check(is_str,y)
 x.style.border=y
}
function dom_bottom(x,y)
{
 check(is_obj,x)
 check(is_cool,y)
 if(is_num(y))
 {
  const _=to_px(y)
  {
   const s=_
   {
    return dom_bottom(x,s)
   }
  }
 }
 const _=from_mw(y)
 {
  const s=_
  {
   x.style.bottom=s
  }
 }
}
function dom_br(x)
{
 check(is_obj,x)
 return dom_init("br",x)
}
function dom_button(x)
{
 check(is_nullable,x)
 return dom_init("button",x)
}
function dom_by_class(x,y)
{
 check(is_obj,x)
 check(is_str,y)
 const _=[]
 {
  const r=_
  {
   const _=x.getElementsByClassName(y)
   {
    const collection=_
    {
     for(let i=0;i<collection.length;i++)
     {
      const _=collection.item(i)
      {
       const node=_
       {
        push(r,node)
       }
      }
     }
     return r
    }
   }
  }
 }
}
function dom_by_id(x)
{
 check(is_str,x)
 return document.getElementById(x)
}
function dom_by_tag(x,y)
{
 check(is_obj,x)
 check(is_str,y)
 const _=[]
 {
  const r=_
  {
   const _=x.getElementsByTagName(y)
   {
    const collection=_
    {
     for(let i=0;i<collection.length;i++)
     {
      const _=collection.item(i)
      {
       const node=_
       {
        push(r,node)
       }
      }
     }
     return r
    }
   }
  }
 }
}
function dom_class(x,y)
{
 check(is_obj,x)
 check(is_str,y)
 x.className=y
}
function dom_clear(x)
{
 check(is_obj,x)
 x.replaceChildren()
}
function dom_clone(x)
{
 check(is_obj,x)
 return x.cloneNode(true)
}
function dom_collapse(x,y)
{
 check(is_obj,x)
 if(is_undef(y))
 {
  return dom_collapse(x,"collapse")
 }
 check(is_str,y)
 x.style.borderCollapse=y
}
function dom_color_background(x,y)
{
 check(is_obj,x)
 if(is_undef(y))
 {
  return x.style.backgroundColor
 }
 check(is_str,y)
 x.style.backgroundColor=y
}
function dom_color(x,y)
{
 check(is_obj,x)
 function on_enter(x,y)
 {
  check(is_obj,x)
  check(is_str,y)
  x.style.color="white"
 }
 function on_leave(x,y)
 {
  check(is_obj,x)
  check(is_str,y)
  x.style.color=y
 }
 if(is_undef(y))
 {
  return x.style.color
 }
 check(is_str,y)
 x.style.color=y
 const _=dom_tag(x)
 {
  const tag=_
  {
   if(same(tag,"a"))
   {
    const _=partial(on_enter,x,y)
    {
     const enter=_
     {
      const _=partial(on_leave,x,y)
      {
       const leave=_
       {
        x.addEventListener("mouseenter",enter)
        x.addEventListener("mouseleave",leave)
       }
      }
     }
    }
   }
  }
 }
}
function dom_colspan(x,y)
{
 check(is_obj,x)
 check(is_uint,y)
 dom_attr(x,"colspan",y)
}
function dom_compute_size(x)
{
 check(is_obj,x)
 const _=dom_div(body)
 {
  const div=_
  {
   const _=dom_html(x)
   {
    const html=_
    {
     dom_display(div,"inline-block")
     dom_html(div,html)
     const _=dom_rect(div)
     {
      const r=_
      {
       dom_remove(div)
       const _=r.width
       {
        const width=_
        {
         const _=r.height
         {
          const height=_
          {
           return {width,height}
          }
         }
        }
       }
      }
     }
    }
   }
  }
 }
}
function dom_css(x,y,z,...a)
{
 check(is_str,x)
 check(is_str,y)
 if(is_num(z))
 {
  const _=to_str(z)
  {
   const s=_
   {
    return dom_css(x,y,s,...a)
   }
  }
 }
 check(is_str,z)
 const _=dom_by_tag(document,"style")
 {
  const style=_
  {
   const _=front(style)
   {
    const style=_
    {
     const _=dom_text(style)
     {
      const content=_
      {
       const _=concat(y,":",z,";")
       {
        const css=_
        {
         const _=brace(css)
         {
          const css=_
          {
           const _=concat(x,css,"\n")
           {
            const css=_
            {
             const _=concat(content,css)
             {
              const css=_
              {
               dom_text(style,css)
               if(is_full(a))
               {
                dom_css(x,...a)
               }
              }
             }
            }
           }
          }
         }
        }
       }
      }
     }
    }
   }
  }
 }
}
function dom_cursor(x,y)
{
 check(is_obj,x)
 check(is_str,y)
 x.style.cursor=y
}
function dom_descendants(x)
{
 check(is_obj,x)
 const _=[]
 {
  const r=_
  {
   for(const v of x.children)
   {
    push(r,v)
    const _=dom_descendants(v)
    {
     const a=_
     {
      append(r,a)
     }
    }
   }
   return r
  }
 }
}
function dom_dialog()
{
 function on_key_press(x,y)
 {
  check(is_obj,x)
  check(is_obj,y)
  const _=to_lower(y.key)
  {
   const key=_
   {
    if(same(key,"enter"))
    {
     const _=x.onenter
     {
      const onenter=_
      {
       if(is_fn(onenter))
       {
        const _=document.activeElement
        {
         const focus=_
         {
          const _=dom_tag(focus)
          {
           const focus=_
           {
            if(different(focus,"textarea"))
            {
             onenter(x)
            }
           }
          }
         }
        }
       }
      }
     }
    }
   }
  }
 }
 const _=dom_init("dialog")
 {
  const r=_
  {
   r.onkeypress=partial(on_key_press,r)
   return r
  }
 }
}
function dom_display(x,y)
{
 check(is_obj,x)
 check(is_str,y)
 x.style.display=y
}
function dom_div(x,y)
{
 check(is_nullable,x)
 const _=dom_init("div",x)
 {
  const r=_
  {
   if(is_def(y))
   {
    dom_text(r,y)
   }
   return r
  }
 }
}
function dom_filter(x,y)
{
 check(is_obj,x)
 check(is_str,y)
 x.style.filter=y
}
function dom_font_weight(x,y)
{
 check(is_obj,x)
 if(is_undef(y))
 {
  return x.style.fontWeight
 }
 check(is_str,y)
 x.style.fontWeight=y
}
function dom_form(x)
{
 check(is_nullable,x)
 return dom_init("form",x)
}
function dom_height(x,y)
{
 check(is_obj,x)
 check(is_cool,y)
 if(is_num(y))
 {
  const _=to_px(y)
  {
   const s=_
   {
    return dom_height(x,s)
   }
  }
 }
 const _=from_mw(y)
 {
  const v=_
  {
   x.style.height=v
  }
 }
}
function dom_hr(x)
{
 check(is_nullable,x)
 const _=dom_init("div",x)
 {
  const r=_
  {
   dom_margin_top(r,padding)
   dom_margin_bottom(r,padding)
   dom_border_top(r,border)
   return r
  }
 }
}
function dom_html_outer(x,y)
{
 check(is_obj,x)
 if(is_undef(y))
 {
  return to_str(x.outerHTML)
 }
 check(is_str,y)
 x.outerHTML=y
}
function dom_html(x,y)
{
 check(is_obj,x)
 if(is_undef(y))
 {
  return to_str(x.innerHTML)
 }
 check(is_str,y)
 x.innerHTML=y
}
function dom_id(x,y)
{
 check(is_obj,x)
 check(is_str,y)
 x.id=y
}
function dom_img(x,y)
{
 check(is_nullable,x)
 check(is_def,x)
 const _=dom_init("img",x)
 {
  const r=_
  {
   if(is_def(y))
   {
    check(is_str,y)
    r.src=y
   }
   return r
  }
 }
}
function dom_init(x,y)
{
 check(is_str,x)
 if(is_undef(y))
 {
  return dom_init(x,body)
 }
 else if(is_null(y))
 {
  return document.createElement(x)
 }
 else
 {
  check(is_obj,y)
  const _=document.createElement(x)
  {
   const r=_
   {
    dom_push(y,r)
    return r
   }
  }
 }
}
function dom_input(x)
{
 check(is_nullable,x)
 return dom_init("input",x)
}
function dom_label(x,y)
{
 check(is_nullable,x)
 const _=dom_init("label",x)
 {
  const r=_
  {
   if(is_def(y))
   {
    dom_text(r,y)
   }
   return r
  }
 }
}
function dom_left(x,y)
{
 check(is_obj,x)
 check(is_cool,y)
 if(is_num(y))
 {
  const _=to_px(y)
  {
   const s=_
   {
    return dom_left(x,s)
   }
  }
 }
 const _=from_mw(y)
 {
  const s=_
  {
   x.style.left=s
  }
 }
}
function dom_li(x)
{
 check(is_nullable,x)
 return dom_init("li",x)
}
function dom_line_height()
{
 const _=dom_div(body,"M")
 {
  const div=_
  {
   const _=div.offsetHeight
   {
    const r=_
    {
     dom_remove(div)
     return r
    }
   }
  }
 }
}
function dom_margin_bottom(x,y)
{
 check(is_obj,x)
 check(is_cool,y)
 if(is_num(y))
 {
  const _=to_px(y)
  {
   const s=_
   {
    return dom_margin_bottom(x,s)
   }
  }
 }
 const _=from_mw(y)
 {
  const v=_
  {
   x.style.marginBottom=v
  }
 }
}
function dom_margin_left(x,y)
{
 check(is_obj,x)
 check(is_cool,y)
 if(is_num(y))
 {
  const _=to_px(y)
  {
   const s=_
   {
    return dom_margin_left(x,s)
   }
  }
 }
 const _=from_mw(y)
 {
  const v=_
  {
   x.style.marginLeft=v
  }
 }
}
function dom_margin_right(x,y)
{
 check(is_obj,x)
 check(is_cool,y)
 if(is_num(y))
 {
  const _=to_px(y)
  {
   const s=_
   {
    return dom_margin_right(x,s)
   }
  }
 }
 const _=from_mw(y)
 {
  const v=_
  {
   x.style.marginRight=v
  }
 }
}
function dom_margin_top(x,y)
{
 check(is_obj,x)
 check(is_cool,y)
 if(is_num(y))
 {
  const _=to_px(y)
  {
   const s=_
   {
    return dom_margin_top(x,s)
   }
  }
 }
 const _=from_mw(y)
 {
  const v=_
  {
   x.style.marginTop=v
  }
 }
}
function dom_margin(x,y)
{
 check(is_obj,x)
 check(is_cool,y)
 if(is_num(y))
 {
  const _=to_px(y)
  {
   const s=_
   {
    return dom_margin(x,s)
   }
  }
 }
 const _=from_mw(y)
 {
  const v=_
  {
   x.style.margin=v
  }
 }
}
function dom_max_height(x,y)
{
 check(is_obj,x)
 check(is_cool,y)
 if(is_num(y))
 {
  const _=to_px(y)
  {
   const s=_
   {
    return dom_max_height(x,s)
   }
  }
 }
 x.style.maxHeight=y
}
function dom_max_width(x,y)
{
 check(is_obj,x)
 check(is_cool,y)
 if(is_num(y))
 {
  const _=to_px(y)
  {
   const s=_
   {
    return dom_max_width(x,s)
   }
  }
 }
 x.style.maxWidth=y
}
function dom_min_height(x,y)
{
 check(is_obj,x)
 check(is_cool,y)
 if(is_num(y))
 {
  const _=to_px(y)
  {
   const s=_
   {
    return dom_min_height(x,s)
   }
  }
 }
 x.style.minHeight=y
}
function dom_min_width(x,y)
{
 check(is_obj,x)
 check(is_cool,y)
 if(is_num(y))
 {
  const _=to_px(y)
  {
   const s=_
   {
    return dom_min_width(x,s)
   }
  }
 }
 x.style.minWidth=y
}
function* dom_modal(x,y)
{
 check(is_obj,x)
 if(is_undef(y))
 {
  return yield* dom_modal(x,nop)
 }
 x.showModal()
 y()
 while(x.open)
 {
  yield
 }
 dom_remove(x)
}
function dom_object_fit(x,y)
{
 check(is_obj,x)
 check(is_str,y)
 x.style.objectFit=y
}
function dom_option(x)
{
 check(is_nullable,x)
 return dom_init("option",x)
}
function dom_over(x,y,z)
{
 check(is_obj,x)
 check(is_str,y)
 check(is_cool,z)
 const _=null
 {
  let previous=_
  {
   function on_enter(x,y,z)
   {
    check(is_obj,x)
    check(is_str,y)
    check(is_cool,z)
    if(is_null(previous))
    {
     previous=get(x.style,y)
    }
    set(x.style,y,z)
   }
   function on_leave(x,y)
   {
    check(is_obj,x)
    check(is_str,y)
    if(!is_null(previous))
    {
     set(x.style,y,previous)
    }
   }
   const _=partial(on_enter,x,y,z)
   {
    const enter=_
    {
     const _=partial(on_leave,x,y)
     {
      const leave=_
      {
       x.addEventListener("mouseenter",enter)
       x.addEventListener("mouseleave",leave)
      }
     }
    }
   }
  }
 }
}
function dom_overflow_wrap(x,y)
{
 check(is_obj,x)
 check(is_str,y)
 x.style.overflowWrap=y
}
function dom_overflow_x(x,y)
{
 check(is_obj,x)
 x.style.overflowX=y
}
function dom_overflow_y(x,y)
{
 check(is_obj,x)
 x.style.overflowY=y
}
function dom_overflow(x,y)
{
 check(is_obj,x)
 x.style.overflow=y
}
function dom_overflown(x)
{
 check(is_obj,x)
 if(gt(x.scrollHeight,x.clientHeight))
 {
  return true
 }
 if(gt(x.scrollWidth,x.clientWidth))
 {
  return true
 }
 return false
}
function dom_padding_bottom(x,y)
{
 check(is_obj,x)
 check(is_cool,y)
 if(is_num(y))
 {
  const _=to_px(y)
  {
   const s=_
   {
    return dom_padding_bottom(x,s)
   }
  }
 }
 const _=from_mw(y)
 {
  const v=_
  {
   x.style.paddingBottom=v
  }
 }
}
function dom_padding_left(x,y)
{
 check(is_obj,x)
 check(is_cool,y)
 if(is_num(y))
 {
  const _=to_px(y)
  {
   const s=_
   {
    return dom_padding_left(x,s)
   }
  }
 }
 const _=from_mw(y)
 {
  const v=_
  {
   x.style.paddingLeft=v
  }
 }
}
function dom_padding_right(x,y)
{
 check(is_obj,x)
 check(is_cool,y)
 if(is_num(y))
 {
  const _=to_px(y)
  {
   const s=_
   {
    return dom_padding_right(x,s)
   }
  }
 }
 const _=from_mw(y)
 {
  const v=_
  {
   x.style.paddingRight=v
  }
 }
}
function dom_padding_top(x,y)
{
 check(is_obj,x)
 check(is_cool,y)
 if(is_num(y))
 {
  const _=to_px(y)
  {
   const s=_
   {
    return dom_padding_top(x,s)
   }
  }
 }
 const _=from_mw(y)
 {
  const v=_
  {
   x.style.paddingTop=v
  }
 }
}
function dom_padding(x,y)
{
 check(is_obj,x)
 check(is_cool,y)
 if(is_num(y))
 {
  const _=to_px(y)
  {
   const s=_
   {
    return dom_padding(x,s)
   }
  }
 }
 const _=from_mw(y)
 {
  const v=_
  {
   x.style.padding=v
  }
 }
}
function dom_parent(x)
{
 check(is_obj,x)
 return x.parentElement
}
function dom_position(x,y)
{
 check(is_obj,x)
 check(is_str,y)
 x.style.position=y
}
function dom_pre(x,y)
{
 check(is_nullable,x)
 const _=dom_init("pre",x)
 {
  const r=_
  {
   if(is_def(y))
   {
    dom_text(r,y)
   }
   return r
  }
 }
}
function dom_push(x,y)
{
 check(is_obj,x)
 check(is_obj,y)
 x.append(y)
}
function dom_rect(x)
{
 check(is_obj,x)
 const _=x.getBoundingClientRect()
 {
  const o=_
  {
   const _=o.x
   {
    const x=_
    {
     const _=o.y
     {
      const y=_
      {
       const _=o.width
       {
        const width=_
        {
         const _=o.height
         {
          const height=_
          {
           return {x,y,width,height}
          }
         }
        }
       }
      }
     }
    }
   }
  }
 }
}
function dom_reflow(x)
{
 check(is_obj,x)
 function f(x)
 {
  const _=x
  {
   const s=_
   {
   }
  }
 }
 const _=x.outerHTML
 {
  const s=_
  {
   f(s)
  }
 }
}
function dom_remove(x)
{
 check(is_obj,x)
 x.remove()
}
function dom_right(x,y)
{
 check(is_obj,x)
 check(is_cool,y)
 if(is_num(y))
 {
  const _=to_px(y)
  {
   const s=_
   {
    return dom_right(x,s)
   }
  }
 }
 const _=from_mw(y)
 {
  const s=_
  {
   x.style.right=s
  }
 }
}
function dom_rowspan(x,y)
{
 check(is_obj,x)
 check(is_uint,y)
 dom_attr(x,"rowspan",y)
}
function dom_select(x,y)
{
 check(is_nullable,x)
 check(is_obj,y)
 const _=dom_init("select",x)
 {
  const r=_
  {
   for(const k in y)
   {
    const _=get(y,k)
    {
     const v=_
     {
      const _=dom_option(r)
      {
       const option=_
       {
        option.value=k
        dom_text(option,v)
       }
      }
     }
    }
   }
   return r
  }
 }
}
function dom_separator(x,y)
{
 check(is_nullable,x)
 if(is_undef(y))
 {
  return dom_separator(x,"|")
 }
 check(is_str,y)
 const _=concat(" ",y," ")
 {
  const s=_
  {
   const _=dom_init("span",x)
   {
    const r=_
    {
     dom_text(r,s)
     dom_color(r,"gray")
     return r
    }
   }
  }
 }
}
function dom_shadow(x,y)
{
 check(is_obj,x)
 check(is_str,y)
 x.style.boxShadow=y
}
function dom_small_caps(x)
{
 check(is_obj,x)
 x.style.fontVariantCaps="small-caps"
}
function dom_spacer(x,y)
{
 check(is_nullable,x)
 if(is_undef(y))
 {
  return dom_spacer(x,line)
 }
 check(is_cool,y)
 const _=dom_span(x)
 {
  const r=_
  {
   dom_display(r,"inline-block")
   dom_width(r,y)
   return r
  }
 }
}
function dom_span(x,y)
{
 check(is_nullable,x)
 const _=dom_init("span",x)
 {
  const r=_
  {
   if(is_def(y))
   {
    dom_text(r,y)
   }
   return r
  }
 }
}
function dom_style_computed(x,y)
{
 check(is_obj,x)
 check(is_str,y)
 const _=getComputedStyle(x)
 {
  const o=_
  {
   return get(o,y)
  }
 }
}
function dom_style_remove(x,y)
{
 check(is_obj,x)
 check(is_str,y)
 x.style.removeProperty(y)
}
function dom_style_tag(x)
{
 check(is_nullable,x)
 return dom_init("style",x)
}
function dom_style(x,y)
{
 check(is_obj,x)
 check(is_str,y)
 return get(x.style,y)
}
function dom_table_layout(x,y)
{
 check(is_obj,x)
 check(is_str,y)
 x.style.tableLayout=y
}
function dom_table(x)
{
 check(is_nullable,x)
 const _=dom_init("table",x)
 {
  const r=_
  {
   dom_collapse(r)
   return r
  }
 }
}
function dom_tag(x)
{
 check(is_obj,x)
 return to_lower(x.tagName)
}
function dom_target(x,y)
{
 check(is_obj,x)
 check(is_str,y)
 dom_attr(x,"target",y)
}
function dom_td(x,y)
{
 check(is_nullable,x)
 const _=dom_init("td",x)
 {
  const r=_
  {
   if(is_def(y))
   {
    dom_text(r,y)
   }
   return r
  }
 }
}
function dom_text_overflow(x,y)
{
 check(is_obj,x)
 check(is_str,y)
 x.style.textOverflow=y
}
function dom_text_width(x)
{
 check(is_str,x)
 const _=dom_span(body,x)
 {
  const span=_
  {
   dom_display(span,"inline-block")
   const _=span.offsetWidth
   {
    const r=_
    {
     dom_remove(span)
     return r
    }
   }
  }
 }
}
function dom_text(x,y)
{
 check(is_obj,x)
 if(is_undef(y))
 {
  return x.textContent
 }
 if(is_num(y))
 {
  const _=to_str(y)
  {
   const s=_
   {
    return dom_text(x,s)
   }
  }
 }
 check(is_str,y)
 x.textContent=y
}
function dom_textarea(x)
{
 check(is_nullable,x)
 return dom_init("textarea",x)
}
function dom_th(x,y)
{
 check(is_nullable,x)
 const _=dom_init("th",x)
 {
  const r=_
  {
   if(is_def(y))
   {
    dom_text(r,y)
   }
   return r
  }
 }
}
function dom_top(x,y)
{
 check(is_obj,x)
 check(is_cool,y)
 if(is_num(y))
 {
  const _=to_px(y)
  {
   const s=_
   {
    return dom_top(x,s)
   }
  }
 }
 const _=from_mw(y)
 {
  const s=_
  {
   x.style.top=s
  }
 }
}
function dom_tr(x)
{
 check(is_nullable,x)
 return dom_init("tr",x)
}
function dom_ul(x)
{
 check(is_nullable,x)
 return dom_init("ul",x)
}
function dom_underline_no(x)
{
 check(is_obj,x)
 x.style.textDecorationLine="none"
}
function dom_unshift(x,y)
{
 check(is_obj,x)
 check(is_obj,y)
 x.prepend(y)
}
function dom_valign(x,y)
{
 check(is_obj,x)
 check(is_str,y)
 x.style.verticalAlign=y
}
function dom_visible(x,y)
{
 check(is_obj,x)
 if(is_undef(y))
 {
  return x.style.visibility
 }
 check(is_str,y)
 x.style.visibility=y
}
function dom_white_space(x,y)
{
 check(is_obj,x)
 check(is_str,y)
 x.style.whiteSpace=y
}
function dom_width(x,y)
{
 check(is_obj,x)
 check(is_cool,y)
 if(is_num(y))
 {
  const _=to_px(y)
  {
   const s=_
   {
    return dom_width(x,s)
   }
  }
 }
 const _=from_mw(y)
 {
  const v=_
  {
   x.style.width=v
  }
 }
}
function dom_window_height()
{
 return innerHeight
}
function dom_window_width()
{
 return innerWidth
}
function dom_word_break(x,y)
{
 check(is_obj,x)
 check(is_str,y)
 x.style.wordBreak=y
}
function group_line(x)
{
 check(is_arr,x)
 const _=[]
 {
  const r=_
  {
   const _=dup(x)
   {
    const a=_
    {
     const _=[]
     {
      const line=_
      {
       while(is_full(a))
       {
        const _=shift(a)
        {
         const s=_
         {
          if(same(s,"\n"))
          {
           const _=dup(line)
           {
            const a=_
            {
             push(r,a)
             clear(line)
            }
           }
          }
          else
          {
           push(line,s)
          }
         }
        }
       }
       if(is_full(line))
       {
        push(r,line)
       }
       return r
      }
     }
    }
   }
  }
 }
}
function* main()
{
 css_init()
 const _=location.pathname
 {
  const path=_
  {
   const _=yield* fetch_url("/sitemap.json")
   {
    const sitemap=_
    {
     if(same(path,"/"))
     {
      const _=argv_params()
      {
       const params=_
       {
        const _=params.get("b")
        {
         const b=_
         {
          const _=params.get("k")
          {
           const k=_
           {
            const _=is_null(b)
            {
             const bb=_
             {
              const _=is_null(k)
              {
               const bk=_
               {
                if(and(bb,bk))
                {
                 yield* page_home(sitemap)
                }
                else if(bk)
                {
                 yield* page_branch(sitemap,b)
                }
                else
                {
                 yield* page_keyword(sitemap,k)
                }
               }
              }
             }
            }
           }
          }
         }
        }
       }
      }
     }
     else
     {
      const _=strip_l(path,"/")
      {
       const name=_
       {
        const _=strip_r(name,"/")
        {
         const name=_
         {
          yield* page_file(sitemap,name)
         }
        }
       }
      }
     }
     const _=time_now()
     {
      const duration=_
      {
       const _=to_fixed(duration)
       {
        const duration=_
        {
         const _=concat(duration,"s")
         {
          const duration=_
          {
           dom_br(body)
           const _=dom_div(body,duration)
           {
            const div=_
            {
             dom_align(div,"center")
             log("ok")
            }
           }
          }
         }
        }
       }
      }
     }
    }
   }
  }
 }
}
function* page_branch(x,y)
{
 check(is_obj,x)
 check(is_str,y)
 document.title=y
 const _=dom_div(body)
 {
  const breadcrumb=_
  {
   dom_a(breadcrumb,"Home","/")
   dom_separator(breadcrumb,">")
   dom_b(breadcrumb,y)
   dom_br(body)
   unit_file_list(x,y)
  }
 }
}
function* page_file(x,y)
{
 check(is_obj,x)
 check(is_str,y)
 function on_click(x)
 {
  check(is_str,x)
  location.hash=x
  location.reload()
 }
 const _=dom_by_tag(body,"pre")
 {
  const pre=_
  {
   const _=front(pre)
   {
    const pre=_
    {
     dom_remove(pre)
     const _=get(x,y)
     {
      const entry=_
      {
       const _=entry.content
       {
        const content=_
        {
         const _=dom_table(body)
         {
          const table=_
          {
           const _=dom_tr(table)
           {
            const tr=_
            {
             const _=dom_td(tr)
             {
              const breadcrumb=_
              {
               const _=dom_td(tr)
               {
                const nav=_
                {
                 const _=concat("/?b=",entry.branch)
                 {
                  const url_branch=_
                  {
                   dom_width(table,"100%")
                   dom_align(nav,"right")
                   dom_a(breadcrumb,"Home","/")
                   dom_separator(breadcrumb,">")
                   dom_a(breadcrumb,entry.branch,url_branch)
                   dom_separator(breadcrumb,">")
                   dom_b(breadcrumb,entry.name)
                   dom_br(body)
                   const _=sitemap_previous(x,y)
                   {
                    const url_previous=_
                    {
                     const _=concat("/",url_previous,"/")
                     {
                      const url_previous=_
                      {
                       const _=sitemap_next(x,y)
                       {
                        const url_next=_
                        {
                         const _=concat("/",url_next,"/")
                         {
                          const url_next=_
                          {
                           dom_a(nav,"<<",url_previous)
                           dom_separator(nav," | ")
                           dom_a(nav,">>",url_next)
                           const _=split(content)
                           {
                            const lines=_
                            {
                             const _=dom_table(body)
                             {
                              const table=_
                              {
                               for(const k in lines)
                               {
                                const _=to_i(k)
                                {
                                 const i=_
                                 {
                                  const _=at(lines,i)
                                  {
                                   const v=_
                                   {
                                    const _=inc(i)
                                    {
                                     const n=_
                                     {
                                      const _=dom_tr(table)
                                      {
                                       const tr=_
                                       {
                                        const _=dom_td(tr)
                                        {
                                         const line_number=_
                                         {
                                          const _=dom_td(tr)
                                          {
                                           const code=_
                                           {
                                            dom_over(tr,"background-color","whitesmoke")
                                            dom_valign(line_number,"top")
                                            dom_align(line_number,"right")
                                            const _=concat("#",n)
                                            {
                                             const anchor=_
                                             {
                                              const _=dom_a(line_number,n,anchor)
                                              {
                                               const a=_
                                               {
                                                a.id=n
                                                a.onclick=partial(on_click,anchor)
                                                const _=scan(v)
                                                {
                                                 const tokens=_
                                                 {
                                                  const _=dom_div(code)
                                                  {
                                                   const div=_
                                                   {
                                                    dom_span(div," ")
                                                    dom_white_space(div,"pre-wrap")
                                                    for(const k in tokens)
                                                    {
                                                     const _=to_i(k)
                                                     {
                                                      const i=_
                                                      {
                                                       const _=at(tokens,i)
                                                       {
                                                        const v=_
                                                        {
                                                         const _=syntax_attribute(v)
                                                         {
                                                          const node=_
                                                          {
                                                           dom_push(div,node)
                                                          }
                                                         }
                                                        }
                                                       }
                                                      }
                                                     }
                                                    }
                                                    if(same(location.hash,anchor))
                                                    {
                                                     line_number.scrollIntoView()
                                                     dom_color_background(tr,"whitesmoke")
                                                     dom_bold(line_number)
                                                    }
                                                   }
                                                  }
                                                 }
                                                }
                                               }
                                              }
                                             }
                                            }
                                           }
                                          }
                                         }
                                        }
                                       }
                                      }
                                     }
                                    }
                                   }
                                  }
                                 }
                                }
                               }
                              }
                             }
                            }
                           }
                          }
                         }
                        }
                       }
                      }
                     }
                    }
                   }
                  }
                 }
                }
               }
              }
             }
            }
           }
          }
         }
        }
       }
      }
     }
    }
   }
  }
 }
}
function* page_home(x)
{
 check(is_obj,x)
 document.title="Documentation of mabynogy's source code"
 const _=time_hn(compile_time)
 {
  const time=_
  {
   const _=dom_div(body)
   {
    const div=_
    {
     dom_span(div,"Compiled: ")
     dom_b(div,time)
     dom_br(body)
     unit_file_list(x)
    }
   }
  }
 }
}
function* page_keyword(x,y)
{
 check(is_obj,x)
 check(is_str,y)
 const _=y
 {
  const keyword=_
  {
   function* load_data(x)
   {
    check(is_obj,x)
    const _=[]
    {
     const r=_
     {
      for(const k in x)
      {
       const _=get(x,k)
       {
        const v=_
        {
         const _=v
         {
          const file=_
          {
           const _=get_content(file.content)
           {
            const content=_
            {
             if(!contain(content,keyword))
             {
              continue
             }
             const _=scan(content)
             {
              const a=_
              {
               const _=group_line(a)
               {
                const a=_
                {
                 for(const k in a)
                 {
                  const _=to_i(k)
                  {
                   const i=_
                   {
                    const _=at(a,i)
                    {
                     const v=_
                     {
                      const _=inc(i)
                      {
                       const n=_
                       {
                        if(!match_word(v,keyword))
                        {
                         continue
                        }
                        const _=v
                        {
                         const line=_
                         {
                          const _={file,line,n}
                          {
                           const o=_
                           {
                            push(r,o)
                           }
                          }
                         }
                        }
                       }
                      }
                     }
                    }
                   }
                  }
                 }
                 yield
                }
               }
              }
             }
            }
           }
          }
         }
        }
       }
      }
      return r
     }
    }
   }
   function push_row(x,y,z,a)
   {
    check(is_obj,x)
    check(is_obj,y)
    check(is_arr,z)
    check(is_uint,a)
    const _=concat("/",y.id,"/")
    {
     const url_line=_
     {
      const _=concat(url_line,"#",a)
      {
       const url_line=_
       {
        const _=concat("/?b=",y.branch)
        {
         const url_branch=_
         {
          const _=path_ext(y.path)
          {
           const lang=_
           {
            dom_a(x.line,a,url_line,true)
            dom_word_break(x.code,"break-word")
            dom_white_space(x.code,"pre-wrap")
            for(const v of z)
            {
             const _=syntax_attribute(v)
             {
              const node=_
              {
               if(contain(v,keyword))
               {
                const _=dom_color(node)
                {
                 const fore=_
                 {
                  const _=dom_color_background(node)
                  {
                   let back=_
                   {
                    const _=dom_font_weight(node)
                    {
                     const bold=_
                     {
                      if(is_empty(back))
                      {
                       back="transparent"
                      }
                      dom_color(node,"white")
                      dom_color_background(node,"indigo")
                      dom_bold_no(node)
                      dom_over(node,"color",fore)
                      dom_over(node,"background-color",back)
                      dom_over(node,"font-weight",bold)
                     }
                    }
                   }
                  }
                 }
                }
               }
               dom_push(x.code,node)
              }
             }
            }
            dom_text(x.lang,lang)
            dom_text(x.name,y.name)
            dom_a(x.branch,y.branch,url_branch,true)
           }
          }
         }
        }
       }
      }
     }
    }
   }
   function match_word(x,y)
   {
    check(is_arr,x)
    check(is_str,y)
    for(const v of x)
    {
     if(contain(v,y))
     {
      return true
     }
    }
    return false
   }
   function get_content(x)
   {
    check(is_str,x)
    const _=[]
    {
     const a=_
     {
      for(const v of split(x))
      {
       const _=trim(v)
       {
        const s=_
        {
         push(a,s)
        }
       }
      }
      return join(a)
     }
    }
   }
   document.title=keyword
   const _=dlg_loading(30)
   {
    const loading=_
    {
     const _=dom_div(body)
     {
      const breadcrumb=_
      {
       dom_a(breadcrumb,"Home","/")
       dom_separator(breadcrumb,">")
       dom_span(breadcrumb,"Keywords")
       dom_separator(breadcrumb,">")
       dom_b(breadcrumb,keyword)
       dom_br(body)
       const _=grid_init(body,"#","line","code","lang","name","branch")
       {
        const grid=_
        {
         const _=1
         {
          let n=_
          {
           dom_display(grid.table,"none")
           const _=y
           {
            const key=_
            {
             const _=yield* digest(key)
             {
              const key=_
              {
               const _=head(key,16)
               {
                const key=_
                {
                 const _=concat("doc_cache_",key)
                 {
                  const key=_
                  {
                   const _=storage_get(key)
                   {
                    let data=_
                    {
                     if(is_empty(data))
                     {
                      data=yield* load_data(x)
                      const _=to_json(data)
                      {
                       const s=_
                       {
                        try
                        {
                         storage_set(key,s)
                        }
                        catch
                        {
                        }
                       }
                      }
                     }
                     else
                     {
                      data=from_json(data)
                     }
                     for(const k in data)
                     {
                      const _=to_i(k)
                      {
                       const i=_
                       {
                        const _=at(data,i)
                        {
                         const v=_
                         {
                          const _=inc(i)
                          {
                           const n=_
                           {
                            const _=grid_push(grid)
                            {
                             const row=_
                             {
                              push_row(row,v.file,v.line,v.n)
                              dom_text(row.sharp,n)
                              yield
                             }
                            }
                           }
                          }
                         }
                        }
                       }
                      }
                     }
                     grid_align(grid,"sharp","right")
                     grid_align(grid,"line","right")
                     grid_ellipsis(grid)
                     dom_display(grid.table,"block")
                     dom_remove(loading)
                    }
                   }
                  }
                 }
                }
               }
              }
             }
            }
           }
          }
         }
        }
       }
      }
     }
    }
   }
  }
 }
}
function sitemap_next(x,y)
{
 check(is_obj,x)
 check(is_str,y)
 const _=reverse(x)
 {
  const o=_
  {
   return sitemap_previous(o,y)
  }
 }
}
function sitemap_previous(x,y)
{
 check(is_obj,x)
 check(is_str,y)
 const _=get_keys(x)
 {
  const keys=_
  {
   const _=back(keys)
   {
    let r=_
    {
     for(const k in x)
     {
      if(same(k,y))
      {
       return r
      }
      r=k
     }
     return r
    }
   }
  }
 }
}
function syntax_attribute(x)
{
 check(is_str,x)
 const _=null
 {
  let r=_
  {
   if(is_lit(x))
   {
    const _=from_json(x)
    {
     const s=_
     {
      const _=concat("/?k=",s)
      {
       const url=_
       {
        r=dom_a(body,x,url,true)
       }
      }
     }
    }
   }
   else if(is_rvalue(x))
   {
    const _=concat("/?k=",x)
    {
     const url=_
     {
      r=dom_a(body,x,url,true)
     }
    }
   }
   else if(is_comment(x))
   {
    const _=strip_l(x,"//")
    {
     const s=_
     {
      const _=concat("/?k=",s)
      {
       const url=_
       {
        r=dom_a(body,x,url,true)
       }
      }
     }
    }
   }
   else
   {
    r=dom_span(body)
    dom_text(r,x)
   }
   const _=["assign","if","elseif","else","while","forin","forof","fornum","for","cont","continue","brk","break","ret","return","null","run","not","end"]
   {
    const keywords=_
    {
     const _=["fn","function","gn","let","var","const"]
     {
      const declarations=_
      {
       if(is_comment(x))
       {
        dom_color(r,"darkred")
       }
       else if(is_lit(x))
       {
        dom_color(r,"darkorange")
       }
       else if(is_numeric(x))
       {
        dom_color(r,"green")
       }
       else if(contain(keywords,x))
       {
        dom_color(r,"darkblue")
        dom_bold(r)
       }
       else if(contain(declarations,x))
       {
        dom_color(r,"darkred")
        dom_bold(r)
       }
       else
       {
        dom_color(r,"black")
       }
       return r
      }
     }
    }
   }
  }
 }
}
function unit_file_list(x,y)
{
 check(is_obj,x)
 if(is_undef(y))
 {
  return unit_file_list(x,"")
 }
 check(is_str,y)
 const _=["#","name","branch","lang","size","sloc"]
 {
  const columns=_
  {
   if(is_full(y))
   {
    const _=find(columns,"branch")
    {
     const n=_
     {
      remove(columns,n)
     }
    }
   }
   const _=grid_init(body,...columns)
   {
    const grid=_
    {
     const _=get_values(x)
     {
      const a=_
      {
       const _={}
       {
        const lang_slocs=_
        {
         const _={}
         {
          const lang_sizes=_
          {
           const _=1
           {
            let n=_
            {
             const _=0
             {
              let total_sloc=_
              {
               const _=0
               {
                let total_size=_
                {
                 for(const k in a)
                 {
                  const _=to_i(k)
                  {
                   const i=_
                   {
                    const _=at(a,i)
                    {
                     const v=_
                     {
                      if(is_full(y))
                      {
                       if(different(y,v.branch))
                       {
                        continue
                       }
                      }
                      const _=grid_push(grid)
                      {
                       const row=_
                       {
                        const _=path_ext(v.path)
                        {
                         const ext=_
                         {
                          const _=v.sloc
                          {
                           const sloc=_
                           {
                            const _=v.content.length
                            {
                             const size=_
                             {
                              const _=to_bsize(size)
                              {
                               const bsize=_
                               {
                                const _=concat("/",v.id,"/")
                                {
                                 const url_name=_
                                 {
                                  const _=concat("/?b=",v.branch)
                                  {
                                   const url_branch=_
                                   {
                                    dom_a(row.name,v.name,url_name,true)
                                    if(is_empty(y))
                                    {
                                     dom_a(row.branch,v.branch,url_branch,true)
                                    }
                                    dom_text(row.sharp,n)
                                    dom_text(row.lang,ext)
                                    dom_text(row.size,bsize)
                                    dom_text(row.sloc,sloc)
                                    const _=get(lang_slocs,ext,0)
                                    {
                                     const lang_sloc=_
                                     {
                                      const _=add(lang_sloc,sloc)
                                      {
                                       const lang_sloc=_
                                       {
                                        set(lang_slocs,ext,lang_sloc)
                                        const _=get(lang_sizes,ext,0)
                                        {
                                         const lang_size=_
                                         {
                                          const _=add(lang_size,size)
                                          {
                                           const lang_size=_
                                           {
                                            set(lang_sizes,ext,lang_size)
                                            n=inc(n)
                                            total_sloc=add(total_sloc,v.sloc)
                                            total_size=add(total_size,v.content.length)
                                           }
                                          }
                                         }
                                        }
                                       }
                                      }
                                     }
                                    }
                                   }
                                  }
                                 }
                                }
                               }
                              }
                             }
                            }
                           }
                          }
                         }
                        }
                       }
                      }
                     }
                    }
                   }
                  }
                 }
                 for(const k in lang_slocs)
                 {
                  const _=grid_push(grid)
                  {
                   const row=_
                   {
                    const _=get(lang_slocs,k)
                    {
                     const sloc=_
                     {
                      const _=get(lang_sizes,k)
                      {
                       const size=_
                       {
                        const _=to_bsize(size)
                        {
                         const bsize=_
                         {
                          dom_text(row.name,k)
                          dom_align(row.name,"right")
                          dom_text(row.size,bsize)
                          dom_text(row.sloc,sloc)
                         }
                        }
                       }
                      }
                     }
                    }
                   }
                  }
                 }
                 const _=grid_push(grid)
                 {
                  const row=_
                  {
                   const _=to_bsize(total_size)
                   {
                    const size=_
                    {
                     dom_text(row.name,"Total")
                     dom_align(row.name,"right")
                     dom_text(row.size,size)
                     dom_text(row.sloc,total_sloc)
                     grid_align(grid,"sharp","right")
                     grid_align(grid,"size","right")
                     grid_align(grid,"sloc","right")
                     grid_ellipsis(grid)
                    }
                   }
                  }
                 }
                }
               }
              }
             }
            }
           }
          }
         }
        }
       }
      }
     }
    }
   }
  }
 }
}
init()